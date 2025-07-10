import { useEffect, useState } from "react";

import { getMenuByRoleAndType } from "@/constants/menu";
import { useAuthStore } from "@/stores/auth/useAuthStore";

export type MenuData = {
  categoryCode?: string;
  code: string;
  header: string;
  icon: string;
  title: any;
  url?: any;
};

const useMenu = (): [MenuData[] | null, string[]] => {
  const { auth } = useAuthStore();
  const [menu, setMenu] = useState<MenuData[] | null>(null);
  const [menuCategories, setMenuCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!auth?.role) return;
    const menus: MenuData[] = getMenuByRoleAndType(auth.role, auth.userType);

    const categories = Array.from(
      new Set(menus.map((i) => i.categoryCode || "").filter(Boolean))
    );

    setMenu(menus);
    setMenuCategories(categories);
  }, [auth?.role, auth?.userType]);

  return [menu, menuCategories];
};

export default useMenu;
