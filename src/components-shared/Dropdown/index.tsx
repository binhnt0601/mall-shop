import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  label: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className='relative inline-block'
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className='flex items-center gap-1 transition hover:text-blue-600'>
        {label}
        <FiChevronDown
          className={`ml-1 text-blue-600 transition-transform duration-300 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          size={16}
          aria-hidden='true'
        />
      </button>
      {open && (
        <ul className='absolute left-0 top-full z-40 m-0 w-56 animate-fade-in-up rounded-lg border bg-white p-1 shadow-lg'>
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={clsx(
                  pathname === item.href && 'text-blue-700 font-bold underline',
                  'flex items-center gap-2 rounded px-4 py-2 transition hover:bg-blue-50 hover:text-blue-700',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
