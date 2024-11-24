'use client'

import React from 'react'

import Image from 'next/image'

import Box from '@mui/material/Box'

import image1 from '@/public/about-us-4-1.png'
import image2 from '@/public/about-us-4-2.png'
import image3 from '@/public/about-us-4-3.png'
import CustomSpan from '@/app/components/shared/CustomSpan'
import ResponsiveBanner from '@/app/components/shared/ResponsiveBanner'
import { useAboutUsAnimations } from '@/app/hooks/useAboutUsAnimations'

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
    <div className="flex">
      <Box
        mr={{ xs: 0, md: 2.5 }}
        flexDirection="column"
        justifyItems="center"
        sx={{ width: { xs: '100%', md: '50%' } }}
      >
        <ResponsiveBanner
          id="card5"
          headline={frame4Headline}
          bodyText={frame4BodyText}
          media={Image1}
          mediaWidth={100}
          align="bottom"
        />
      </Box>
      <Box
        id="card6"
        position="relative"
        display={{ xs: 'none', md: 'flex' }}
        flexDirection="column"
        overflow="hidden"
        width="50%"
      >
        <Box mb={4}> {Image2}</Box>
        <Box width="66%">{Image3}</Box>
      </Box>
    </div>
  )
}
