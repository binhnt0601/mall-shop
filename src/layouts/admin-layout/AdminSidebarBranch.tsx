import Link from 'next/link';

const AdminSidebarBranch = () => {
  return (
    <>
      <div className='hidden items-center justify-center md:flex'>
        <div className='flex items-center'>
          <Link href='/'>
            <img src={'/logo.png'} alt='logo' width={160} height={160} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSidebarBranch;
