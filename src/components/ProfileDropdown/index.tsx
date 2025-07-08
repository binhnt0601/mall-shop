import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import Link from 'next/link';
import { useAuth } from '@/providers/auth-provider';
import { useRouter } from 'next/router';
import { MdPerson } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';

const ProfileDropdown = () => {
  const { pathname } = useRouter();
  const { auth, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='relative inline-block text-left' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className='flex items-center justify-center gap-1 rounded-md p-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
      >
        <div className='relative inline-flex size-10 items-center justify-center overflow-hidden rounded-full bg-[#FF7125]'>
          <span className='font-medium text-white'>
            {auth?.name?.slice(0, 1).toUpperCase() ||
              auth?.gmail?.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <div>
          <div className='flex flex-col items-start'>
            <p>{auth?.gmail}</p>
            <p>{auth?.name}</p>
          </div>
        </div>
        <HiChevronDown
          size={18}
          className={clsx(
            'transition-transform duration-300',
            isOpen && 'rotate-180',
          )}
        />
      </button>

      {isOpen && (
        <div className='absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white pb-3 shadow-lg'>
          <div className='flex flex-col items-start gap-1 px-4'>
            <Link
              href='/profile'
              className={clsx(
                pathname === '/profile' && 'text-primary',
                'hover:text-primary hover:font-medium flex gap-2 items-center',
                'border-b pb-1 w-full',
              )}
            >
              <MdPerson />
              <span>My profile</span>
            </Link>
            <button
              className='flex items-center gap-2 rounded text-center hover:font-medium hover:text-primary'
              onClick={logout}
            >
              <BiLogOut />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
