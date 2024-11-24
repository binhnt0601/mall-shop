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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="text-center border-t">
      <KeyboardArrowUpIcon
        className="my-2 cursor-pointer"
        onClick={scrollToTop}
      />
      <div className="bg-[#01161B]">
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            paddingTop: { md: '142px', xs: '70px' },
            paddingBottom: { md: '64px', xs: '48px' },
            paddingX: { md: '10%', xs: '5%' }
          }}
        >
          <Box
            sx={{
              width: { md: '168px', xs: '64px' },
              height: { md: '160px', xs: '61px' },
              position: 'absolute',
              top: '46%',
              transform: 'translate(0, -50%)'
            }}
          >
            <Image
              fill
              src={'/logo-vertical.png'}
              alt="logo"
              style={{
                objectFit: 'cover'
              }}
            />
          </Box>
          <div className="w-full flex flex-col md:items-center items-end justify-end text-white">
            <div>
              <Typography
                sx={{
                  typography: { md: 'h6', sm: 'h7' }
                }}
                className="text-left sm:block hidden"
              >
                Site map
              </Typography>

              <div className="flex gap-5 md:gap-10">
                {menuItems.map((menuItem) => {
                  return (
                    <Link key={menuItem.index} href={menuItem.href}>
                      <Typography
                        fontWeight="bold"
                        sx={{
                          typography: { md: 'h6', sm: 'h7' },
                          '&:hover': {
                            color: '#1ED760'
                          }
                        }}
                      >
                        {menuItem.label}
                      </Typography>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </Box>
      </div>
      <div>
        <Typography variant="body1" py="8px">
          Copyright @blockyfi.co
        </Typography>
      </div>
    </div>
  )
}
export default Footer
