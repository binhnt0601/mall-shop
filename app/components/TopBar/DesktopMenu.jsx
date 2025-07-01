import React from 'react';

import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledTypograpghy = styled(Typography)(({ color }) => ({
  color,
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '1.4em',
  lineHeight: '1.4em',
}));

export default function DesktopMenu({ menuItems }) {
  return (
    <div className="hidden md:flex">
      {menuItems.map((menuItem) => {
        return (
          <Button key={menuItem.index}>
            <Link href={menuItem.href} target={menuItem?.target || ''}>
              <StyledTypograpghy color="black">
                {menuItem.label}
              </StyledTypograpghy>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
