import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

import useMenu, { MenuData } from '@/hooks/useMenu';
import IconSVG from '@/components-shared/IconSVG';
import { getDashboardOnlyMenu } from '@/constants/menu';

const AdminSidebarMenu = ({ setCollapseShow }: any) => {
  const router = useRouter();
  const [menu, menuCategories] = useMenu();

  const MenuItem = ({ menuData }: { menuData: MenuData }) => {
    const active =
      menuData.code === 'setting'
        ? router.asPath.startsWith('/setting')
        : router.asPath.startsWith(menuData.url || '');

    return (
      <li className='mb-1 items-center'>
        <Link
          href={menuData.url}
          onClick={() => {
            setCollapseShow('hidden');
          }}
          className={twMerge(
            'rounded-md px-3 py-2 transition',
            'hover:bg-primary hover:bg-opacity-50 hover:bg-[#FAEEE1]',
            'flex items-center gap-4',
            active
              ? 'border-l-4 border-primary border-[#FF7125] bg-[#FAEEE1] text-[#FF7125]'
              : '',
          )}
        >
          <IconSVG
            src={`/icons/menu/${menuData.icon}.svg`}
            size={20}
            className={active ? 'bg-[#FF7125]' : 'ml-[2px] bg-black'}
          />
          {menuData.title}
        </Link>
      </li>
    );
  };

  if (!menu) {
    return (
      <>
        <hr className='my-3 md:min-w-full' />
        <h6 className='block py-1 text-xs font-bold uppercase text-primary-dark no-underline md:min-w-full'>
          Loading...
        </h6>
      </>
    );
  }

  return (
    <div>
      {getDashboardOnlyMenu()?.map((item) => (
        <ul
          key={item.code}
          className='flex list-none flex-col md:min-w-full md:flex-col'
        >
          <MenuItem menuData={item} />
        </ul>
      ))}
      {menuCategories.map((cate, i) => {
        const cateMenu = menu.filter((m) => m?.categoryCode?.includes(cate));

        return (
          cateMenu.length > 0 && (
            <Fragment key={i}>
              <hr className='my-3 md:min-w-full' />
              <h6 className='block py-1 text-sm uppercase text-[#848484] no-underline md:min-w-full'>
                {cate}
              </h6>

              <ul className='flex list-none flex-col md:min-w-full md:flex-col'>
                {cateMenu.map((item, i) => (
                  <MenuItem menuData={item} key={i} />
                ))}
              </ul>
            </Fragment>
          )
        );
      })}
    </div>
  );
};

export default AdminSidebarMenu;
