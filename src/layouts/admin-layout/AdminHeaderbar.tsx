import LocaleDropdown from '@/components/LocaleDropdown';
import { useAuth } from '@/providers/auth-provider';
import { UserRoles } from '@/services/user/user.model';
import { Dispatch, SetStateAction } from 'react';
import { FiMenu } from 'react-icons/fi';

interface Props {
  setCollapseShow: Dispatch<SetStateAction<boolean>>;
}

const AdminHeaderBar: React.FC<Props> = ({ setCollapseShow }) => {
  const { auth } = useAuth();

  return (
    <div className='fixed inset-x-0 z-30 ml-0 bg-white px-10 py-3 shadow md:ml-64 lg:ml-72 mt-0'>
      <div className='flex w-full items-center justify-between'>
        <h1 className='py-1.5 font-medium'>
          {[UserRoles.ADMIN, UserRoles.MEMBER].includes(
            auth?.role as UserRoles,
          ) ? (
            <span>Admin Management</span>
          ) : (
            <span>Merchant Management</span>
          )}
        </h1>
        {auth && (
          <div className='hidden md:flex items-center'>
            <LocaleDropdown />
          </div>
        )}

        {/* Mobile Toggle button */}
        <button
          className='cursor-pointer text-black bg-white rounded p-2 shadow md:hidden'
          type='button'
          onClick={() => setCollapseShow(true)}
        >
          <FiMenu size={26} />
        </button>
      </div>
    </div>
  );
};

export default AdminHeaderBar;
