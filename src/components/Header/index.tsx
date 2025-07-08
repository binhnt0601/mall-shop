'use client';

import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
import { useAuth } from '@/providers/auth-provider'; // đường dẫn sửa theo project
import { Menu, MenuItem, Avatar, Button } from '@mui/material';

const courses = [
  { label: 'Basic Communication', href: '/courses/basic' },
  { label: 'IELTS Preparation', href: '/courses/ielts' },
  { label: 'Kids English', href: '/courses/kids' },
  { label: 'Online Course', href: '/courses/online' },
];

const aboutUs = [
  { label: 'Our Mission', href: '/about/mission' },
  { label: 'Our Team', href: '/about/team' },
  { label: 'FAQ', href: '/about/faq' },
];

const menu = [
  { label: 'Home', href: '/' },
  { label: 'Courses', children: courses },
  { label: 'Pricing', href: '/pricing-fee' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'About Us', children: aboutUs },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const { auth, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className='fixed w-full z-50 flex items-center justify-between bg-white px-8 shadow'>
      {/* Logo */}
      <Image width={72} height={52} src='/favicon.png' alt='Brand Logo' />

      {/* Desktop menu */}
      <DesktopMenu menu={menu} />

      {/* Right side: Login or User dropdown */}
      {!auth ? (
        <Link
          href='/login'
          className='ml-4 hidden rounded-full bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700 md:inline-block'
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
            className='ml-4 hidden md:inline-flex items-center gap-2 text-blue-700'
          >
            <Avatar
              alt={auth.name || auth.email}
              src={auth.avatar || '/default-avatar.png'}
              sx={{ width: 32, height: 32 }}
            />
            <span className='font-semibold'>{auth.name || auth.email}</span>
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
          >
            <MenuItem disabled>
              <div>
                <div className='font-bold'>{auth.name || auth.email}</div>
                <div className='text-xs text-gray-500'>{auth.email}</div>
              </div>
            </MenuItem>
            <MenuItem onClick={handleLogout} className='text-red-600'>
              Logout
            </MenuItem>
          </Menu>
        </>
      )}

      {/* Burger */}
      <button
        className='flex size-10 items-center justify-center md:hidden'
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMobileMenuOpen((v) => !v)}
      >
        {mobileMenuOpen ? (
          <IoMdClose size={32} className='text-blue-700' />
        ) : (
          <FiMenu size={28} className='text-blue-700' />
        )}
      </button>

      {/* Mobile menu */}
      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        menu={menu}
      />
    </div>
  );
};

export default Header;
