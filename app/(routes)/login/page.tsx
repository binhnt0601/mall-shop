export const dynamic = 'force-dynamic';
import dynamicImport from 'next/dynamic';

const LoginPageClient = dynamicImport(() => import('./LoginPageClient'), {
  ssr: false,
});

const LoginPage = () => {
  // Read env on the server
  const apiUri = process.env.NEXT_PUBLIC_API_URI || '';

  return <LoginPageClient apiUri={apiUri} />;
};

export default LoginPage;
