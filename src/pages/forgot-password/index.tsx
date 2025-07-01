'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

import { useLoader } from '@/providers/loading-provider';
import { UserService } from '@/services/user/user.repo';
import { toast } from '@/helpers/toast';
import FormikTextField from '@/components-shared/FormikTextField';
import MainLayout from '@/layouts/MainLayout';

export const dynamic = 'force-dynamic';

interface FormikValues {
  email: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Enter your email'),
});

const ForgotPasswordPage = () => {
  const router = useRouter();
  const { setLoading } = useLoader();

  const handleSubmit = async (
    values: FormikValues,
    { setSubmitting }: FormikHelpers<FormikValues>,
  ) => {
    try {
      setLoading(true);

      await UserService.resetPassword({
        email: values.email,
      });

      toast.success('Email sent successfully!');

      // Redirect to email verification page
      router.push(`/verify-email?email=${encodeURIComponent(values.email)}`);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || 'Failed to send reset email',
      );
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Stack
      className='h-dvh items-center justify-center
    bg-gradient-to-br from-[red] to-[orange] px-5 text-center text-white'
    >
      <Image src='/icons/success.svg' width={100} height={100} alt='icon' />
      <p className='pt-[30px] text-[50px]'>Yo! Forgot Your Password?</p>
      <span className='text-[30px]'>
        No worries! Enter your email and we will send you a reset
      </span>
      <form
        onSubmit={formik.handleSubmit}
        className='mt-10 flex w-full max-w-[460px] flex-col gap-4'
      >
        <Stack className='my-10 w-full items-center gap-5 sm:w-[420px]'>
          <div className='w-full text-start'>
            <FormikTextField
              formik={formik}
              name='email'
              label='Email'
              icon={<EmailIcon className='text-white' />}
            />
          </div>
          <button
            className='w-full rounded-full bg-[#fc9a14] py-3 uppercase'
            type='submit'
          >
            SEND REQUEST
          </button>
        </Stack>
      </form>

      <Link href='/login'>BACK TO LOGIN</Link>
    </Stack>
  );
};

export default ForgotPasswordPage;

ForgotPasswordPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
