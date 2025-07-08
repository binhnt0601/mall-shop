import AdminLayout from '@/layouts/admin-layout/AdminLayout';
import Link from 'next/link';

const ForbiddenPage = () => {
  return (
    <section className='h-screen bg-seconds-light'>
      <div className='flex w-full flex-col items-center justify-center text-primary'>
        <img
          src='/images/errors/page403.png'
          className='mb-5 w-full'
          alt='403'
        />
        <h1 className='mt-8 text-24 font-bold'>❌ Access Denied</h1>
        <p className='mt-4 max-w-xl text-center text-16 text-current'>
          You don’t have permission to access this page.
          <br />
          Try going back to dashboard
        </p>
        <div className='mt-8 flex justify-center'>
          <Link href='/dashboard'>Go back Dashboard</Link>
        </div>
      </div>
    </section>
  );
};

ForbiddenPage.Layout = AdminLayout;
export default ForbiddenPage;
