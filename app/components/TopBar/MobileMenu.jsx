import React, { useState } from 'react';

import { usePathname } from 'next/navigation';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Drawer from '@mui/material/Drawer';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

import CustomLink from '../shared/CustomLink';

import LogoImage from '@/assets/logo-vertical.png';

export default function MobileMenu({ menuItems }) {
    const pathname = usePathname();
    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    };

    return (
        <div className="md:hidden flex">
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggle}
                color="black"
            >
                {isToggle ? <CloseRoundedIcon /> : <MenuIcon />}
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
                <Stack className="items-center">
                    <div className="p-5">
                        <Image
                            width={181}
                            height={181}
                            src={LogoImage}
                            alt="logo"
                        />
                    </div>

                    {menuItems.map((menuItem) => (
                        <div key={menuItem.index} className="w-full">
                            <CustomLink
                                to={menuItem.href}
                                color={
                                    pathname === menuItem.href
                                        ? 'green'
                                        : 'black'
                                }
                            >
                                <MenuItem onClick={handleToggle}>
                                    <Typography variant="h5" fontWeight="bold">
                                        {menuItem.label}
                                    </Typography>
                                </MenuItem>
                            </CustomLink>
                        </div>
                    ))}
                </Stack>
            </Drawer>
        </div>
    );
}
