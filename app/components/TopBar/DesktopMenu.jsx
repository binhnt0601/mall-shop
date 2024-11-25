import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

const StyledTypograpghy = styled(Typography)(({ color }) => ({
    color,
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '1.4em',
    lineHeight: '1.4em',
}));

export default function DesktopMenu({ menuItems }) {
    const pathname = usePathname();

    return (
        <Stack className="hidden md:flex">
            {menuItems.map((menuItem) => {
                return (
                    <Button key={menuItem.index}>
                        <Link href={menuItem.href}>
                            <StyledTypograpghy
                                color={
                                    pathname === menuItem.href ? '' : 'black'
                                }
                                sx={{
                                    '&:hover': {
                                        color: '#1ED760',
                                    },
                                }}
                            >
                                {menuItem.label}
                            </StyledTypograpghy>
                        </Link>
                    </Button>
                );
            })}
        </Stack>
    );
}
