import MainLayout from '@/layouts/MainLayout';
import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

const RegisterPageClient = dynamicImport(() => import('./RegisterPageClient'), {
  ssr: false,
});

const RegisterPage = () => {
  // Read env on the server
  const apiUri = process.env.NEXT_PUBLIC_API_URI || '';

  return <RegisterPageClient apiUri={apiUri} />;
};

export default RegisterPage;

RegisterPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
