'use client'

import React from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import image1 from '@/public/about-us-4-1.png'
import image2 from '@/public/about-us-4-2.png'
import image3 from '@/public/about-us-4-3.png'
import CustomSpan from '@/app/components/shared/CustomSpan'
import { useAboutUsAnimations } from '@/app/hooks/useAboutUsAnimations'
import { Stack } from '@mui/material'

export default function Frame4() {
  const { banner5_1, banner5_2, banner5_3 } = useAboutUsAnimations()

  const frame4Headline = (
    <>
      <CustomSpan>Engagement</CustomSpan>
      <span> and</span> <CustomSpan>Vision</CustomSpan>
    </>
  )
  const frame4BodyText = (
    <span>
      Join us at <CustomSpan fontSize="1.2em">Blockify</CustomSpan> to explore
      how blockchain can revolutionize your operations and connect you to the
      future of a fully integrated, global network. Let’s build a smarter, more
      connected world together.
    </span>
  )

  const Image1 = (
    <Image
      ref={banner5_1}
      src={image1}
      alt="image-4-1"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )

  const Image2 = (
    <Image
      ref={banner5_2}
      src={image2}
      alt="image-4-2"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )
  const Image3 = (
    <Image
      ref={banner5_3}
      src={image3}
      alt="image-4-3"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )
  return (
    <div className="bg-[#fff4e4]">
      <div style={{
        textAlign: 'center',
        fontSize: '40px',
        color: '#fc9a14',
        paddingBottom: '20px',
        fontFamily: 'Work Sans',
        fontWeight: 'bold'
      }}>Partnerships</div>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: 3
        }}
      >

        {Array(15).fill(0).map((_, index) =>
          <a href="https://www.google.com" target="_blank">
            <Image

              key={index}
              width={200}
              height={200}
              src={image3}
            />
          </a>)}
      </Box>
    </div >
  )
}
