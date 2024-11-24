'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Typography } from '@mui/material'

const menuItems = [
  { index: 0, label: 'About Us', href: '/' },
  { index: 1, label: 'Service', href: '/service' },
  { index: 2, label: 'Contact', href: '/contact' }
]

function Footer() {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }

  return (

    <div className="bg-[#01161B]">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column' },
        }}
      >
        <Image
          width={80}
          height={80}
          src={'/logo-vertical.png'}
          alt="logo"
        />

        <Typography className='text-white'>
          © AIMalls All Rights Reserve
        </Typography>
      </Box>
    </div>

  )
}
export default Footer
