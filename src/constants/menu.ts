export const getAdminMenu = () => [
  {
    categoryCode: 'ADMIN',
    code: 'user',
    header: `Admin`,
    icon: 'user',
    title: `Admin`,
    url: '/admin/user',
  },
  {
    categoryCode: 'SYSTEM',
    code: 'setting',
    header: `Setting`,
    icon: 'setting',
    title: `Setting`,
    url: '/setting/COMMON',
  },
];

export const getMemberMenu = () => [
  {
    categoryCode: 'MEMBER',
    code: 'user',
    header: `Member`,
    icon: 'admin',
    title: `Admin`,
    url: '/admin/user',
  },
];

export const getDashboardOnlyMenu = () => [
  {
    categoryCode: '',
    code: 'dashboard',
    header: `Overview`,
    icon: 'dashboard',
    title: `Dashboard`,
    url: '/dashboard',
  },
];
