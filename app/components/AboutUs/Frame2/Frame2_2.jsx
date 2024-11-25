'use client'
import React from 'react'

import Image from 'next/image'

import image from '@/assets/about-us-2-2.png'
import ResponsiveBanner from '@/app/components/shared/ResponsiveBanner'
import CustomSpan from '@/app/components/shared/CustomSpan'
import { useAboutUsAnimations } from '@/app/hooks/useAboutUsAnimations'

export default function Frame2_2() {
  const { banner2 } = useAboutUsAnimations()

  const image22 = (
    <Image
      ref={banner2}
      src={image}
      loading="lazy"
      alt="image-2-2"
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
  )

  const headline = (
    <span>
      <CustomSpan>Mission</CustomSpan> Statement
    </span>
  )
  const bodyText = (
    <span>
      <CustomSpan fontSize="1.2em">As a leader in IT services</CustomSpan>{' '}
      specializing in blockchain technology, we are dedicated to transforming
      industries worldwide. Under our bold slogan &apos;blocks the world&apos;,
      we strive to unlock the full potential of blockchain technology, making
      every transaction more transparent, secure, and efficient.
    </span>
  )
  return (
    <ResponsiveBanner
      id="card2"
      mediaWidth={50}
      headline={headline}
      bodyText={bodyText}
      media={image22}
      align="right"
    />
  )
}
