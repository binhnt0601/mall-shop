import { useEffect, useState } from 'react';

import { useAuth } from '../providers/auth-provider';
import { UserRoles } from '../services/user/user.model';
import { getAdminMenu, getMemberMenu } from '@/constants/menu';

export type MenuData = {
  categoryCode?: string;
  code: string;
  header: string;
  icon?: string;
  title: any;
  url?: any;
};

const useMenu = (): [MenuData[] | null, string[]] => {
  const { auth } = useAuth();
  const [menu, setMenu] = useState<MenuData[] | null>(null);
  const [menuCategories, setMenuCategories] = useState<string[]>([]);

  useEffect(() => {
    if (!auth?.role) return;
    // if (!auth?.role || !i18n.locale) return;

    let menus: MenuData[] = [];
    if (auth?.role === UserRoles.ADMIN) {
      menus = getAdminMenu();
    } else if (auth?.role === UserRoles.MEMBER) {
      menus = getMemberMenu();
    }

    setMenuCategories(menus.map((i) => i.categoryCode || '').filter((i) => i));

    setMenu(menus);
  }, [auth?.role]);

  return [menu, menuCategories];
};

export default useMenu;
