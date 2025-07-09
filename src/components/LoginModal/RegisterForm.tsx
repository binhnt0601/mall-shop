import React from 'react';
import {
  IconButton,
  Stack,
  Typography,
  Divider,
  Checkbox,
  TextField,
  InputAdornment,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { toast } from '@/helpers/toast';

const TERMS_URL = 'https://aimalls.app/terms-and-conditions';
const PRIVACY_URL = 'https://aimalls.app/privacy-policy';

export default function RegisterForm({
  apiUri,
  onLoginClick,
  onClose,
}: {
  apiUri: string;
  onLoginClick: () => void;
  onClose: () => void;
}) {
  const router = useRouter();
  const [isChecked, setIsChecked] = React.useState({
    terms: false,
    privacy: false,
  });
  const isMobile = useMediaQuery('(max-width:900px)');

  const handleCheck =
    (key: keyof typeof isChecked) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked((prev) => ({ ...prev, [key]: event.target.checked }));
    };

  const handleRegister = () => {
    toast.success('Registration successful! Welcome to AI Malls!');
    // Call API register nếu cần
  };

  const handleGoogle = () => {
    router.push(`${apiUri}/api/google`);
  };

  const disabled = !(isChecked.terms && isChecked.privacy);

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      width='100%'
      minHeight={{ xs: '100vh', md: 540 }}
      sx={{
        position: 'relative',
        maxWidth: 830,
        mx: 'auto',
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 14,
          right: 14,
          color: '#fff',
          bgcolor: 'rgba(255,255,255,0.08)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.13)' },
          zIndex: 10,
        }}
        aria-label='Close'
      >
        <CloseIcon />
      </IconButton>
      {/* Left: Form */}
      <Stack
        sx={{
          px: { xs: 2, sm: 4, md: 5 },
          py: { xs: 2.5, sm: 6, md: 7 },
          width: { xs: '100%', md: '60%' },
          bgcolor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Logo mobile */}
        <Stack display={{ xs: 'flex', md: 'none' }} alignItems='center' mb={2}>
          <Image
            width={120}
            height={80}
            src='/logo.png'
            alt='Brand Logo'
            style={{ marginBottom: 4 }}
          />
        </Stack>
        <Typography
          fontSize={{ xs: 26, sm: 32, md: 36 }}
          fontWeight={700}
          lineHeight={1.2}
          color='white'
          textAlign='center'
          mb={2}
          sx={{ textShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
        >
          Sign up to create an Account
        </Typography>
        <form
          style={{
            width: '100%',
            maxWidth: 420,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
          onSubmit={(e) => {
            e.preventDefault();
            if (!disabled) handleRegister();
          }}
        >
          <button
            type='button'
            className='w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition'
            onClick={handleGoogle}
          >
            <GoogleIcon style={{ fontSize: 20 }} />
            Sign in With Google
          </button>
          <div
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <Divider
              sx={{
                flex: 1,
                borderColor: 'rgba(255,255,255,0.6)',
                alignSelf: 'center',
              }}
            />
            <Typography
              sx={{
                color: '#fff',
                px: 2,
                fontSize: 15,
                userSelect: 'none',
                fontWeight: 500,
              }}
            >
              or
            </Typography>
            <Divider
              sx={{
                flex: 1,
                borderColor: 'rgba(255,255,255,0.6)',
                alignSelf: 'center',
              }}
            />
          </div>

          <TextField
            variant='outlined'
            label='Email'
            autoComplete='email'
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            className='w-full rounded-md'
            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.85)' } }}
            InputProps={{
              style: { color: 'white' },
              endAdornment: (
                <InputAdornment position='end'>
                  <EmailIcon className='text-white' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant='outlined'
            label='Password'
            type='password'
            autoComplete='new-password'
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            className='w-full rounded-md'
            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.85)' } }}
            InputProps={{
              style: { color: 'white' },
              endAdornment: (
                <InputAdornment position='end'>
                  <PasswordIcon className='text-white' />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant='outlined'
            label='Confirm Password'
            type='password'
            autoComplete='new-password'
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            className='w-full rounded-md'
            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.85)' } }}
            InputProps={{
              style: { color: 'white' },
              endAdornment: (
                <InputAdornment position='end'>
                  <PasswordIcon className='text-white' />
                </InputAdornment>
              ),
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              marginTop: 8,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox
                sx={{ '&:hover': { bgcolor: 'transparent' } }}
                disableRipple
                color='default'
                checked={isChecked.terms}
                onChange={handleCheck('terms')}
              />
              <Typography className='text-white text-sm'>
                I accept the{' '}
                <a
                  className='text-[#fc9a14] underline hover:text-yellow-400 transition'
                  target='_blank'
                  href={TERMS_URL}
                  rel='noreferrer'
                >
                  Terms and Conditions
                </a>
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Checkbox
                sx={{ '&:hover': { bgcolor: 'transparent' } }}
                disableRipple
                color='default'
                checked={isChecked.privacy}
                onChange={handleCheck('privacy')}
              />
              <Typography className='text-white text-sm'>
                I agree to the{' '}
                <a
                  className='text-[#fc9a14] underline hover:text-yellow-400 transition'
                  target='_blank'
                  href={PRIVACY_URL}
                  rel='noreferrer'
                >
                  Privacy Policy
                </a>
              </Typography>
            </div>
          </div>
          <button
            type='submit'
            disabled={disabled}
            className={`w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 transition ${
              disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-indigo-50 cursor-pointer'
            }`}
          >
            Register
          </button>
          {/* Login link on mobile */}
          {isMobile && (
            <Typography color='white' textAlign='center' sx={{ mt: 2 }}>
              Already have an account?{' '}
              <span
                className='ml-2 text-[17px] font-medium text-[#fc9a14] hover:text-yellow-400 transition cursor-pointer'
                onClick={onLoginClick}
              >
                Login
              </span>
            </Typography>
          )}
        </form>
      </Stack>
      {/* Right: Welcome section, only on desktop */}
      <Stack
        display={{ xs: 'none', md: 'flex' }}
        sx={{
          width: { md: '40%' },
          minHeight: 540,
          bgcolor: 'transparent',
          color: '#fff',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 4,
          py: 5,
          textAlign: 'center',
          gap: 3,
        }}
      >
        <Image
          width={160}
          height={100}
          src='/logo.png'
          alt='Brand Logo'
          className='drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)]'
        />
        <Typography fontSize={34} fontWeight='bold'>
          Welcome Back!
        </Typography>
        <Typography maxWidth={320}>
          Already a member? Log in and enjoy your AI shopping experience with
          your personalized dashboard, rewards, and more.
        </Typography>
        <button
          className='w-full rounded-md bg-white py-3 font-bold text-indigo-600 flex items-center justify-center gap-2 hover:bg-indigo-50 transition'
          onClick={onLoginClick}
        >
          Login
        </button>
      </Stack>
    </Stack>
  );
}
