import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function WelcomeText() {
  const textProps = {
    sx: {
      fontSize: { xs: '2rem', md: '4.25rem' }
    }
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      color="white"
    >
      <Typography {...textProps}>
        Welcome to <span style={{ fontWeight: 700 }}>Blockify</span>
      </Typography>
      <Typography {...textProps}>Reorganizing the World</Typography>
      <Typography {...textProps}>
        <span style={{ fontWeight: 700 }}>Through Blockchain</span>
      </Typography>
    </Box>
  )
}
