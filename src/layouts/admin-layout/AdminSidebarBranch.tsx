import Link from 'next/link';

const AdminSidebarBranch = () => {
  return (
    <>
      <div className='hidden items-center justify-center md:flex'>
        <div className='flex items-center'>
          <Link href='/dashboard'>
            <img src={'/logo.png'} alt='logo' width={160} height={160} />
          </Link>
        </div>
      </div>
      <Link
        href='/dashboard'
        className='mr-0  inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-gray-600 sm:hidden md:pb-2'
      >
        English Class
      </Link>
    </>
  );
};

export default AdminSidebarBranch;
