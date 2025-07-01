import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Drawer from '@mui/material/Drawer';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import CustomLink from '../../components-shared/CustomLink';

export default function MobileMenu({ menuItems }) {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="flex md:hidden">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleToggle}
        className="!bg-[#fc9a14]"
      >
        {isToggle ? (
          <CloseRoundedIcon className="text-white" />
        ) : (
          <MenuIcon className=" text-white" />
        )}
      </IconButton>
      <Drawer
        anchor="left"
        open={isToggle}
        onClose={handleToggle}
        type="temporary"
        PaperProps={{
          sx: { width: '70%' },
        }}
      >
        <Stack className="items-center px-5">
          <div className="p-5">
            <Image width={181} height={124} src="/favicon.jpg" alt="logo" />
          </div>

          {menuItems.map((menuItem) => (
            <div key={menuItem.index} className="h-10 w-full border-b">
              <CustomLink
                to={menuItem.href}
                color="#fc9a14"
                target={menuItem.target}
              >
                <MenuItem
                  onClick={handleToggle}
                  style={{
                    justifyContent: 'right',
                    padding: 0,
                  }}
                >
                  <Typography>{menuItem.label}</Typography>
                </MenuItem>
              </CustomLink>
            </div>
          ))}

          <button className="mt-5 w-full rounded-full bg-[#fc9a14] py-2 text-white sm:w-[160px]">
            support@gmail.com
          </button>

          <div className="mt-3 flex gap-5 text-[#fc9a14]">
            <Link href="/login">LOGIN</Link>/
            <Link href="/register">REGISTER</Link>
          </div>
        </Stack>
      </Drawer>
    </div>
  );
}
