import { ReactNode, useEffect, useState } from 'react';
import { AdminHeadSEO } from './AdminHeadSEO';
import AdminSidebar from './AdminSidebar';
import { GetAuthToken } from '@/graphql/auth';
import { useRouter } from 'next/router';
import { AuthStatuses, useAuth } from '@/providers/auth-provider';
import AdminHeaderBar from './AdminHeaderbar';

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  const { auth, authStatus, logout } = useAuth();
  const router = useRouter();
  const [collapseShow, setCollapseShow] = useState<boolean>(false);

  useEffect(() => {
    const token = GetAuthToken();
    if (!token) {
      window.location.assign('/signin');
    }

    if (authStatus === AuthStatuses.LOADED) {
      if (!auth) {
        logout?.();
      }
    }
    if (
      auth?.isFirstLogin &&
      router.pathname !== '/first-login' &&
      router.isReady
    ) {
      router.replace('/first-login');
    }
  }, [authStatus, auth, router.pathname, router.isReady]);

  return (
    <>
      <AdminHeadSEO />
      <AdminSidebar
        collapseShow={collapseShow}
        setCollapseShow={setCollapseShow}
      />
      <div className='flex flex-col min-h-screen md:ml-64 lg:ml-72'>
        <AdminHeaderBar setCollapseShow={setCollapseShow} />
        <div className='pt-[61px] flex-1'>{children}</div>
      </div>
    </>
  );
}
