'use client';

import React, { useState } from 'react';

import {
  Checkbox,
  Divider,
  InputAdornment,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router';

import { toast } from '@/helpers/toast';
import Image from 'next/image';

const lightPrimary = 'rgba(255, 255, 255, 0.1)';
const textLight = 'rgba(255, 255, 255, 0.85)';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: 3,
  width: 22,
  height: 22,
  boxShadow:
    'inset 0 0 0 1px rgba(255 255 255 / 0.6), inset 0 -1px 0 rgba(255 255 255 / 0.3)',
  backgroundColor: 'rgba(255 255 255 / 0.15)',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(252, 154, 20, 0.7)',
    outlineOffset: 2,
  },
  'input:hover ~ &': { backgroundColor: 'rgba(252 154 20 / 0.4)' },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: 'rgba(255 255 255 / 0.1)',
  },
  borderWidth: 2,
  borderColor: 'rgba(252, 154, 20, 0.8)',
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: '#fc9a14',
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&::before': {
    display: 'block',
    width: 20,
    height: 20,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': { backgroundColor: '#fc9a14' },
  borderRadius: 50,
});

const RegisterPageClient = ({ apiUri }: { apiUri: string }) => {
  const router = useRouter();

  const onLoginWithGoogle = async () => {
    localStorage.setItem('fallback-domain', router.asPath);
    router.push(`${apiUri}/api/google`);
  };

  const [isChecked, setIsChecked] = useState({
    termsAndConditions: false,
    privacyPolicy: false,
  });

  return (
    <Stack className='min-h-dvh w-full !flex-row'>
      {/* Left side - form */}
      <div className='flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 px-10 py-20'>
        <div className='md:hidden'>
          <Image
            width={181}
            height={124}
            src='/logo.png'
            alt='Brand Logo'
            className='drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)]'
          />
        </div>
        <Typography
          fontWeight='bold'
          color='white'
          textAlign='center'
          className='!text-[32px] sm:!text-[40px] drop-shadow-md mb-3'
        >
          Sign up to create an Account
        </Typography>
        <div className='flex w-full max-w-[460px] flex-col gap-6 mt-5'>
          <button
            className='w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition'
            onClick={onLoginWithGoogle}
          >
            <GoogleIcon style={{ fontSize: 20 }} />
            Sign in With Google
          </button>

          <div className='flex justify-center'>
            <div className='flex w-[120px] items-center justify-center gap-2'>
              <Divider className='h-px w-full bg-white' />
              <span className='text-white select-none'>or</span>
              <Divider className='h-px w-full bg-white' />
            </div>
          </div>

          {/* Email Input */}
          <TextField
            variant='outlined'
            label='Email'
            style={{ background: lightPrimary }}
            className='w-full rounded-md'
            InputLabelProps={{ style: { color: textLight } }}
            InputProps={{
              style: { color: 'white' },
              endAdornment: (
                <InputAdornment position='end'>
                  <EmailIcon className='text-white' />
                </InputAdornment>
              ),
            }}
          />

          {/* Password Input */}
          <TextField
            variant='outlined'
            label='Password'
            style={{ background: lightPrimary }}
            className='w-full rounded-md'
            type='password'
            InputLabelProps={{ style: { color: textLight } }}
            InputProps={{
              style: { color: 'white' },
              endAdornment: (
                <InputAdornment position='end'>
                  <PasswordIcon className='text-white' />
                </InputAdornment>
              ),
            }}
          />

          {/* Confirm Password Input */}
          <TextField
            variant='outlined'
            label='Confirm Password'
            style={{ background: lightPrimary }}
            className='w-full rounded-md'
            type='password'
            InputLabelProps={{ style: { color: textLight } }}
            InputProps={{
              style: { color: 'white' },
              endAdornment: (
                <InputAdornment position='end'>
                  <PasswordIcon className='text-white' />
                </InputAdornment>
              ),
            }}
          />

          {/* Checkbox Terms */}
          <div className='space-y-4 mt-5'>
            <div className='flex items-center gap-2'>
              <Checkbox
                sx={{ '&:hover': { bgcolor: 'transparent' } }}
                disableRipple
                color='default'
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                inputProps={{ 'aria-label': 'Terms and Conditions Checkbox' }}
                onChange={(event) =>
                  setIsChecked((prev) => ({
                    ...prev,
                    termsAndConditions: event.target.checked,
                  }))
                }
              />
              <Typography className='text-white text-sm'>
                I accept the{' '}
                <a
                  className='text-[#fc9a14] underline hover:text-yellow-400 transition'
                  target='_blank'
                  href='https://aimalls.app/terms-and-conditions'
                  rel='noreferrer'
                >
                  Terms and Conditions
                </a>
              </Typography>
            </div>

            <div className='flex items-center gap-2'>
              <Checkbox
                sx={{ '&:hover': { bgcolor: 'transparent' } }}
                disableRipple
                color='default'
                checkedIcon={<BpCheckedIcon />}
                icon={<BpIcon />}
                inputProps={{ 'aria-label': 'Privacy Policy Checkbox' }}
                onChange={(event) =>
                  setIsChecked((prev) => ({
                    ...prev,
                    privacyPolicy: event.target.checked,
                  }))
                }
              />
              <Typography className='text-white text-sm'>
                I agree to the{' '}
                <a
                  className='text-[#fc9a14] underline hover:text-yellow-400 transition'
                  target='_blank'
                  href='https://aimalls.app/privacy-policy'
                  rel='noreferrer'
                >
                  Privacy Policy
                </a>
              </Typography>
            </div>
          </div>

          {/* Register button */}
          <button
            disabled={!isChecked.privacyPolicy || !isChecked.termsAndConditions}
            className={`${
              !isChecked.privacyPolicy || !isChecked.termsAndConditions
                ? 'opacity-50 cursor-not-allowed'
                : 'opacity-100 cursor-pointer'
            } w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition`}
            onClick={() => {
              toast.success('Registration successful! Welcome to AI Malls!');
            }}
          >
            Register
          </button>

          {/* Link Login for mobile */}
          <Typography color='white' textAlign='center'>
            Already have an account?{' '}
            <Link
              href='/login'
              className='ml-2 text-[17px] font-medium text-[#fc9a14] hover:text-yellow-400 transition'
            >
              Login
            </Link>
          </Typography>
        </div>
      </div>
    </Stack>
  );
};

export default RegisterPageClient;
