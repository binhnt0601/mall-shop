import React from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import WelcomeText from './WelcomeText'

export default function Frame1() {
  return (
    <Box
      pt="5vh"
      position="absolute"
      sx={{
        top: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        paddingX: { md: '10%', xs: '5%' }
      }}
    >
      <Box
        sx={{
          width: { md: '427px', xs: '285px' },
          height: { md: '400px', xs: '267px' },
          position: 'relative'
        }}
      >
        <Image
          src="/logo-blured.png"
          alt="logo"
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </Box>
      <WelcomeText />
    </Box>
  )
}
