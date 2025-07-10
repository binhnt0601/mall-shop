export function queryParser(
  data: any,
  { hasBraces, fileParam }: { hasBraces: boolean; fileParam?: string } = {
    hasBraces: false,
  }
): string | number | boolean | object | null {
  if (typeof data === "string") {
    if (data.match(/\n/g)) return `"""${data}"""`;
    else if (data.startsWith("$")) return data;
    else return `"${data}"`;
  } else if (typeof data === "object") {
    if (Array.isArray(data)) {
      const arr = [];

      for (const item of data) {
        if (item === undefined) continue;
        arr.push(queryParser(item, { hasBraces: true }));
      }

      return `[${arr.join(", ")}]`;
    } else if (data instanceof Date) {
      return `"${data.toISOString()}"`;
    } else if (data instanceof File) {
      return `$${fileParam}`;
    } else {
      const props = [];

      for (const key in data) {
        if (data[key] === undefined) continue;
        props.push(`${key}: ${queryParser(data[key], { hasBraces: true })}`);
      }

      return hasBraces ? `{ ${props.join(", ")} }` : `${props.join(", ")}`;
    }
  } else {
    return data;
  }
}
