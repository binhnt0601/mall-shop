import { useRouter } from "next/router";

import useMenu from "./useMenu";

export function useCurrentHeader() {
  const { asPath } = useRouter();
  const [menu] = useMenu();

  const path = asPath.split("?")[0].replace(/\/$/, "");

  let activeItem = menu?.find(
    (item) => item.url && path === item.url.replace(/\/$/, "")
  );
  if (!activeItem) {
    activeItem = menu?.find(
      (item) => item.url && path.startsWith(item.url.replace(/\/$/, ""))
    );
  }

  if (activeItem?.header) return activeItem.header;

  const arr = path.split("/").filter(Boolean);
  if (arr.length > 0) {
    const last = arr[arr.length - 1];
    return last
      .split(/[-_ ]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }
  return "";
}
