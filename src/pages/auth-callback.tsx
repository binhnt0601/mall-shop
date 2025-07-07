import { useEffect } from 'react';

import { useRouter } from 'next/router';
import PageLoading from '@/components-shared/PageLoading';
import { SetAuthToken } from '@/graphql/auth';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const pathname = localStorage.getItem('fallback-domain');

    const token = router.query.token;

    if (typeof token === 'string') {

      SetAuthToken(token);
      router.replace(String(pathname));
    } else {
      console.warn('No token found in query params.');
      router.replace(String(pathname));
    }
  }, [router.isReady, router.query.token]);

  return <PageLoading />;
}
