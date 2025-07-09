import BreadCrumbs from '@/components-shared/Breadcrumbs';
import useMenu from '@/hooks/useMenu';
import { t } from '@lingui/macro';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

interface PageHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const HOME_PATH = '/manage/dashboard';

const PageHeader: React.FC<PageHeaderProps> = ({ className, children }) => {
  const router = useRouter();
  const [menu] = useMenu();

  const menuItem = React.useMemo(() => {
    if (!menu) return undefined;
    return menu.find((item: any) => router.pathname === item.url);
  }, [menu, router.pathname]);

  const breadcrumbs = React.useMemo(() => {
    if (router.pathname === HOME_PATH) {
      return [{ href: HOME_PATH, label: t`Home` }];
    }
    return [
      { href: HOME_PATH, label: t`Home` },
      { href: menuItem?.url, label: menuItem?.title || t`Page` },
    ];
  }, [router.pathname, menuItem]);

  const isExcludedPath = ['/403', '/404'].includes(router.pathname);

  if (isExcludedPath)
    return <div className={clsx('mt-5', className)}>{children}</div>;

  return (
    <div className='mb-5'>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <div className={clsx('mt-5', className)}>{children}</div>
    </div>
  );
};

export default PageHeader;
