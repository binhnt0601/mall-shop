'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Button, Typography } from '@mui/material'

import successIcon from '@/public/icons/success.svg'

export default function StatusComponent() {
  const router = useRouter()

  return (
    <div className="w-full pt-[5rem] md:mb-[-5rem] mb-[-3rem] md:h-cal-height-lt h-cal-height-mb flex flex-col justify-center items-center gap-3 sm:gap-6">
      <Image
        loading="lazy"
        src={successIcon}
        style={{
          objectFit: 'cover'
        }}
        alt="success"
        className="sm:w-auto sm:h-auto w-[85px] h-[85px]"
      />
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: '3rem', sm: '4.25rem' },
          letterSpacing: '-1.1%',
          textAlign: 'center'
        }}
      >
        Thank You !
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '20px',
          letterSpacing: '-1.1%',
          textAlign: 'center'
        }}
      >
        We got your email/ your phone, we’ll get back to you soon.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        minHeight={40}
        onClick={() => router.push('contact')}
        sx={{
          fontWeight: 700,
          fontSize: '16px',
          boxShadow: 'none',
          borderRadius: '8px',
          color: 'white',
          textTransform: 'none'
        }}
      >
        Go back
      </Button>
    </div>
  )
}
