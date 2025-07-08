import AdminLayout from '@/layouts/admin-layout/AdminLayout';

const NotFoundPage = () => {
  return (
    <section className='flex items-center justify-center'>
      <img src='/images/errors/page404.jpg' className='mb-5' alt='404' />
    </section>
  );
};

NotFoundPage.Layout = AdminLayout;
export default NotFoundPage;
