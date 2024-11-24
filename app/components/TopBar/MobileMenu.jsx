import React, { useState } from 'react'

import { usePathname } from 'next/navigation'

import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Drawer from '@mui/material/Drawer'
import { Typography } from '@mui/material'

import CustomLink from '../shared/CustomLink'

export default function MobileMenu({ menuItems }) {
  const pathname = usePathname()
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', sm: 'none' },
        justifyContent: 'flex-end'
      }}
    >
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
        anchor="top"
        open={isToggle}
        onClose={handleToggle}
        type="temporary"
        PaperProps={{
          sx: { height: '100%', marginTop: '64px', paddingTop: '10px' }
        }}
      >
        <Box>
          {menuItems.map((menuItem) => (
            <CustomLink
              key={menuItem.index}
              to={menuItem.href}
              color={pathname === menuItem.href ? 'green' : 'black'}
            >
              <MenuItem onClick={handleToggle}>
                <Typography variant="h5" fontWeight="bold">
                  {menuItem.label}
                </Typography>
              </MenuItem>
            </CustomLink>
          ))}
        </Box>
      </Drawer>
    </Box>
  )
}
