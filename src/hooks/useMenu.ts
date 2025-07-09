import { useEffect, useState } from 'react';

import { UserRoles } from '../services/user/user.model';
import { getAdminMenu, getUserMenu } from '@/constants/menu';
import { useAuthStore } from '@/stores/auth/useAuthStore';

export type MenuData = {
  categoryCode?: string;
  code: string;
  icon?: string;
  title: any;
  url?: any;
};

const useMenu = (): [MenuData[] | null, string[]] => {
  const { auth } = useAuthStore();
  const [menu, setMenu] = useState<MenuData[] | null>(null);
  const [menuCategories, setMenuCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!auth?.role) return;
    // if (!auth?.role || !i18n.locale) return;

    let menus: MenuData[] = [];
    if (auth?.role === UserRoles.ADMIN) {
      menus = getAdminMenu();
    } else if (auth?.role === UserRoles.USER) {
      menus = getUserMenu();
    }

    setMenuCategories(menus.map((i) => i.categoryCode || '').filter((i) => i));

    setMenu(menus);
  }, [auth?.role]);

  return [menu, menuCategories];
};

export default useMenu;
