import { useRouter } from "next/router";

import useMenu from "@/hooks/useMenu";

export function useCurrentHeader() {
  const { asPath } = useRouter();
  const [menu] = useMenu();

  if (!menu) return "";

  const path = asPath.split("?")[0].replace(/\/$/, "");

  let activeItem = menu.find(
    (item) => item.url && path === item.url.replace(/\/$/, "")
  );
  if (!activeItem) {
    activeItem = menu.find(
      (item) => item.url && path.startsWith(item.url.replace(/\/$/, ""))
    );
  }

  return activeItem?.header || "";
}
