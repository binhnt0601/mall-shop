import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const StyledTypograpghy = styled(Typography)(({ color }) => ({
  color,
  fontWeight: 'bold',
  textTransform: 'none',
  fontSize: '1.4em',
  lineHeight: '1.4em'
}))

export default function DesktopMenu({ menuItems }) {
  const pathname = usePathname()

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', sm: 'flex' },
        justifyContent: 'end'
      }}
    >
      <Box sx={{ marginTop: '1.5rem' }}>
        {menuItems.map((menuItem) => {
          return (
            <Button key={menuItem.index}>
              <Link href={menuItem.href}>
                <StyledTypograpghy
                  color={pathname === menuItem.href ? '' : 'black'}
                  sx={{
                    '&:hover': {
                      color: '#1ED760'
                    }
                  }}
                >
                  {menuItem.label}
                </StyledTypograpghy>
              </Link>
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}
