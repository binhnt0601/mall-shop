'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Paper,
  Button,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

import MainLayout from '@/layouts/MainLayout';
import NextLink from 'next/link';

const testimonials = [
  {
    name: 'Emily Nguyen',
    position: 'Student',
    avatar: '/avatars/emily.jpg',
    feedback:
      'This English course transformed my confidence. The instructors are amazing and the curriculum is very practical.',
  },
  {
    name: 'James Lee',
    position: 'Working Professional',
    avatar: '/avatars/james.jpg',
    feedback:
      'I improved my business English tremendously. The classes fit well into my busy schedule.',
  },
  {
    name: 'Sophia Tran',
    position: 'University Student',
    avatar: '/avatars/sophia.jpg',
    feedback:
      'Fun and engaging lessons with a great community. Highly recommend to anyone learning English!',
  },
  {
    name: 'Michael Pham',
    position: 'Freelancer',
    avatar: '/avatars/michael.jpg',
    feedback:
      'Practical approach and lots of speaking practice. My English skills have never been better!',
  },
  {
    name: 'Anna Le',
    position: 'Entrepreneur',
    avatar: '/avatars/anna.jpg',
    feedback:
      'The course content is clear and practical, and the teachers really care about students’ progress.',
  },
  {
    name: 'David Hoang',
    position: 'Marketing Specialist',
    avatar: '/avatars/david.jpg',
    feedback:
      'Thanks to these courses, my English communication at work has improved significantly.',
  },
  {
    name: 'Linda Phan',
    position: 'Graduate Student',
    avatar: '/avatars/linda.jpg',
    feedback:
      'I loved the interactive classes and the friendly environment. Learning English became fun!',
  },
  {
    name: 'Tommy Vu',
    position: 'Software Engineer',
    avatar: '/avatars/tommy.jpg',
    feedback:
      'Highly recommend! The course helped me prepare for my international job interviews.',
  },
];

const TestimonialsPage = () => {
  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)',
        minHeight: 'calc(100vh - 152px)',
        position: 'relative',
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          color='#035a8e'
          fontWeight='bold'
          textAlign='center'
          gutterBottom
          sx={{ mb: 2 }}
        >
          What Our Students Say
        </Typography>

        <Typography
          variant='h5'
          color='#035a8e'
          fontWeight='medium'
          textAlign='center'
          mb={4}
          sx={{ fontStyle: 'italic', maxWidth: 700, mx: 'auto' }}
        >
          Curious what our students think? Here’s what they say after
          transforming their English skills!
        </Typography>

        <Typography
          variant='body1'
          textAlign='center'
          mb={6}
          color='text.secondary'
        >
          Real feedback from our students who have achieved great success with
          our English courses.
        </Typography>

        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          speed={12000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          cssMode={false}
          grabCursor={true}
          style={{
            paddingBottom: '40px',
            transitionTimingFunction: 'ease-in-out',
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          effect='coverflow'
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {testimonials.map(({ name, position, avatar, feedback }) => (
            <SwiperSlide key={name}>
              <Paper
                elevation={6}
                sx={{
                  p: 5,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  backgroundColor: '#ffffff',
                  boxShadow: '0 8px 20px rgba(3, 90, 142, 0.15)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 12px 25px rgba(3, 90, 142, 0.3)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    src={avatar}
                    alt={name}
                    sx={{
                      width: 64,
                      height: 64,
                      mr: 2,
                      border: '2px solid #fc9a14',
                      boxShadow: '0 0 8px rgba(252, 154, 20, 0.6)',
                    }}
                  />
                  <Box>
                    <Typography fontWeight='bold' fontSize={18} color='#035a8e'>
                      {name}
                    </Typography>
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      fontWeight='medium'
                    >
                      {position}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontStyle: 'italic',
                    color: '#444',
                    flexGrow: 1,
                    fontSize: 16,
                    lineHeight: 1.6,
                    position: 'relative',
                    paddingLeft: '1.5rem',
                    '&::before': {
                      content: '"“"',
                      position: 'absolute',
                      left: 0,
                      top: -4,
                      fontSize: 36,
                      color: '#fc9a14',
                      fontWeight: 'bold',
                      lineHeight: 1,
                      fontFamily: 'serif',
                    },
                  }}
                >
                  {feedback}
                </Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>

        <Box textAlign='center' mt={6}>
          <Typography variant='h6' fontWeight='bold' color='#035a8e' mb={2}>
            Ready to start your own success story?
          </Typography>
          <Button
            variant='contained'
            component={NextLink}
            href='/register'
            sx={{
              borderRadius: 30,
              backgroundColor: '#fc9a14',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 16,
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#e2940f',
              },
            }}
          >
            Join Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsPage;

TestimonialsPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
