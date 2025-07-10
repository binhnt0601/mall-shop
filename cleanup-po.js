import fs from "fs";

import prompts from "prompts";

const files = {
  en: "src/locales/en-US.po",
  vi: "src/locales/vi-VN.po",
};

function parsePoBlocks(data) {
  return data.split(/\n{2,}/g).filter((b) => b.trim());
}

function getMsgid(block) {
  const match = block.match(/^msgid\s+"((?:[^"\\]|\\.)*)"/m);
  if (match) return match[1];
  return "";
}

function getReferences(block) {
  // Lấy toàn bộ các dòng bắt đầu bằng #:
  const refs = block
    .split("\n")
    .filter((l) => l.startsWith("#:"))
    .flatMap((l) => l.replace(/^#: /, "").split(" "));
  return refs;
}

function removeReferences(block) {
  return block
    .split("\n")
    .filter((l) => !l.startsWith("#:"))
    .join("\n")
    .trim();
}

function isHeaderBlock(block) {
  // eslint-disable-next-line quotes
  return block.startsWith('msgid ""') && block.includes("Content-Type:");
}

(async () => {
  const response = await prompts({
    type: "select",
    name: "lang",
    message: "Which language do you want to clean?",
    choices: [
      { title: "English (en)", value: "en" },
      { title: "Vietnamese (vi)", value: "vi" },
    ],
  });

  if (!response.lang) {
    console.log("Cancelled!");
    process.exit(0);
  }

  const file = files[response.lang];
  if (!fs.existsSync(file)) {
    console.error("File not found:", file);
    process.exit(1);
  }

  let data = fs.readFileSync(file, "utf-8");
  const blocks = parsePoBlocks(data);
  let header = "";
  const blockMap = new Map();

  for (const block of blocks) {
    if (isHeaderBlock(block)) {
      header = block;
      continue;
    }
    const msgid = getMsgid(block);
    if (!msgid) continue;

    const refs = getReferences(block);
    const content = removeReferences(block);

    if (!blockMap.has(msgid)) {
      blockMap.set(msgid, { refs: new Set(refs), content });
    } else {
      refs.forEach((r) => blockMap.get(msgid).refs.add(r));
    }
  }

  const sorted = Array.from(blockMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([_, { refs, content }]) => {
      let refLine = "";
      if (refs.size) {
        const refsArr = Array.from(refs).sort();
        const lines = [];
        for (let i = 0; i < refsArr.length; i += 4) {
          lines.push("#: " + refsArr.slice(i, i + 4).join(" "));
        }
        refLine = lines.join("\n");
      }
      return [refLine, content].filter(Boolean).join("\n");
    });

  const cleaned = [header, ...sorted].join("\n\n") + "\n";

  fs.writeFileSync(file, cleaned, "utf-8");
  console.log("Cleaned", file, "Total:", sorted.length, "messages.");
})();
