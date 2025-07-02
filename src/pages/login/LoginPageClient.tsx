'use client';

import React from 'react';

import {
  Divider,
  Stack,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/providers/auth-provider';
import FormikTextField from '@/components-shared/FormikTextField';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Enter your email'),
  password: Yup.string()
    .min(8, 'Sorry, your password must be at least 8 characters')
    .required('Enter your password'),
});

const LoginPageClient = ({ apiUri }: { apiUri: string }) => {
  const { login } = useAuth();
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      await login(values.email, values.password);
    },
  });

  const onLoginWithGoogle = async () => {
    router.push(`${apiUri}/api/google`);
  };

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Stack className='h-dvh w-full !flex-row bg-gradient-radial from-blue-500 to-indigo-600'>
      <div className='flex w-full flex-col items-center justify-center md:w-[65%] px-6 py-10'>
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
          fontSize={40}
          fontWeight={700}
          lineHeight={1.2}
          color='white'
          textAlign='center'
          className='drop-shadow-md mb-3'
        >
          Login to your Account
        </Typography>

        <form
          onSubmit={formik.handleSubmit}
          className='mt-10 flex w-full max-w-[460px] flex-col gap-6'
        >
          <button
            className='w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition'
            type='button'
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

          <FormikTextField
            formik={formik}
            name='email'
            label='Email'
            icon={<EmailIcon className='text-indigo-300' />}
            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.8)' } }}
            inputProps={{ className: 'text-white' }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 1,
                '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.6)' },
                '&.Mui-focused fieldset': {
                  borderColor: '#A78BFA',
                  borderWidth: 2,
                },
                color: 'white',
              },
              '& input': {
                color: 'white',
              },
            }}
          />

          <FormikTextField
            formik={formik}
            name='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            icon={<PasswordIcon className='text-indigo-300' />}
            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.8)' } }}
            inputProps={{ className: 'text-white' }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 1,
                '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.6)' },
                '&.Mui-focused fieldset': {
                  borderColor: '#A78BFA',
                  borderWidth: 2,
                },
                color: 'white',
              },
              '& input': {
                color: 'white',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={handleClickShowPassword}
                    edge='end'
                    aria-label={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    sx={{ color: '#7986cb' }}
                    tabIndex={-1}
                    type='button'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Link
            className='flex flex-row-reverse bg-transparent text-[14px] text-orange-400 hover:text-orange-500 transition mb-4'
            href='/forgot-password'
          >
            Forgot password?
          </Link>

          <button
            type='submit'
            className='w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition'
          >
            Login
          </button>

          <Typography
            color='white'
            textAlign='center'
            className='md:hidden mt-6'
          >
            Don&apos;t have an account?
            <Link
              href='/register'
              className='ml-3 text-[17px] font-medium text-orange-400 hover:text-orange-500 transition'
            >
              Register
            </Link>
          </Typography>
        </form>
      </div>

      <div
        className='hidden w-[50%] flex-col items-center justify-center gap-5
        p-5 text-center text-white md:flex'
      >
        <Image
          width={181}
          height={124}
          src='/logo.png'
          alt='Brand Logo'
          className='drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)]'
        />
        <Typography fontSize={40} fontWeight='bold'>
          New Here?
        </Typography>
        <Typography maxWidth={380}>
          Welcome to the future of shopping, where AI takes you on a
          personalized retail journey like never before. Sign up today and
          discover the extraordinary convenience, tailored experiences, and
          endless possibilities of AI malls.
        </Typography>
        <Link
          className='w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition'
          href='/register'
        >
          Register
        </Link>
      </div>
    </Stack>
  );
};

export default LoginPageClient;
