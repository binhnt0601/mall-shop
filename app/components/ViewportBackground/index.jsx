'use client'

import React from 'react'

import { usePathname, useSearchParams } from 'next/navigation'

import Background from '../Background'

import Frame1 from '@/app/components/AboutUs/Frame1'
import HomeBanner from '@/public/background.png'
import ServiceBanner from '@/public/service-banner.png'
import ServiceBannerMb from '@/public/service-banner-mb.png'
import ContactBanner from '@/public/contact-banner.png'
import ContactBannerMb from '@/public/contact-banner-mb.png'

export default function ViewportBackground({ children }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isHiddenBackground = searchParams.get('status') === 'success'

  const banners = {
    '/': { imgSrc: HomeBanner, textBackground: <Frame1 /> },
    '/service': { imgSrc: [ServiceBanner, ServiceBannerMb] },
    '/contact': { imgSrc: [ContactBanner, ContactBannerMb] }
  }

  const banner = banners[pathname]

  return (
    <div className="my-16 md:my-20">
      {banner && !isHiddenBackground && (
        <Background
          imgSrc={banner.imgSrc}
          textBackground={banner.textBackground}
        />
      )}
      {children}
    </div>
  )
}
