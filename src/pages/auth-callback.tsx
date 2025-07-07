import { useEffect } from 'react';

import { useRouter } from 'next/router';
import PageLoading from '@/components-shared/PageLoading';
import { SetAuthToken } from '@/graphql/auth';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const token = router.query.token;

    if (typeof token === 'string') {
      const pathname = localStorage.getItem('fallback-domain');

      SetAuthToken(token);
      router.replace(String(pathname));
    } else {
      console.warn('No token found in query params.');
    }
  }, [router.isReady, router.query.token]);

  return <PageLoading />;
}
