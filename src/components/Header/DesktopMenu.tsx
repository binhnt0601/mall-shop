import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // App Router
import Dropdown from '@/components-shared/Dropdown';
import { Menu, MenuItem, Avatar, Button } from '@mui/material';
import { UserRoles } from '@/services/user/user.model';
import { useAuth } from '@/providers/auth-provider';
import Link from 'next/link';

interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
}

interface DesktopMenuProps {
  menu: MenuItem[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu }) => {
  const pathname = usePathname();
  const { auth, logout } = useAuth();

  // Dropdown menu state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout?.();
    handleClose();
  };

  return (
    <>
      <nav className='hidden items-center gap-4 md:flex lg:gap-8'>
        {menu.map((item) =>
          item.children ? (
            <Dropdown
              key={item.label}
              label={item.label}
              items={item.children.map((child) => ({
                ...child,
                href: child.href ?? '#',
                active: pathname === child.href,
              }))}
            />
          ) : (
            <a
              key={item.href}
              href={item.href}
              className={
                'transition hover:text-blue-600' +
                (pathname === item.href ? ' text-blue-700 font-bold' : '')
              }
            >
              {item.label}
            </a>
          ),
        )}
      </nav>
      <div className='md:block hidden'>
        {!auth ? (
          <Link
            href='/login'
            className='ml-4 rounded-full bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 md:inline-block'
          >
            Login
          </Link>
        ) : (
          <>
            <Button
              onClick={handleClick}
              aria-controls={open ? 'user-menu' : undefined}
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              className='ml-4 hidden md:flex items-center gap-2 text-blue-700'
            >
              <Avatar
                alt={auth.name || auth.email}
                src={auth.avatar || '/default-avatar.png'}
                sx={{ width: 32, height: 32 }}
              />
              <div className='flex flex-col items-start'>
                <span className='font-semibold'>{auth.name}</span>
              </div>
            </Button>
            <Menu
              id='user-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                sx: { minWidth: 150, py: 1 },
              }}
            >
              {auth.role === UserRoles.ADMIN && (
                <MenuItem
                  component={Link}
                  href='/dashboard'
                  onClick={handleClose}
                  sx={{ fontWeight: 'bold' }}
                >
                  Admin Dashboard
                </MenuItem>
              )}
              <MenuItem onClick={handleLogout} sx={{ color: 'red' }}>
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </>
  );
};

export default DesktopMenu;
