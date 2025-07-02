'use client';
import React from 'react';
import { Container, Box } from '@mui/material';
import IeltsIntro from '@/modules/IeltsPage/IeltsIntro';
import IeltsTopics from '@/modules/IeltsPage/IeltsTopics';
import IeltsQuiz from '@/modules/IeltsPage/IeltsQuiz';
import IeltsAudio from '@/modules/IeltsPage/IeltsAudio';
import IeltsFAQs from '@/modules/IeltsPage/IeltsFAQs';
import IeltsRegister from '@/modules/IeltsPage/IeltsRegister';

export default function IeltsPage() {
  return (
    <Box
      sx={{
        backgroundColor: '#e0f2f1',
        minHeight: 'calc(100vh - 152px)',
        py: 6,
      }}
    >
      <Container maxWidth='lg'>
        <IeltsIntro />
        <IeltsTopics />
        <IeltsQuiz />
        <IeltsAudio />
        <IeltsFAQs />
        <IeltsRegister />
      </Container>
    </Box>
  );
}

IeltsPage.getLayout = function getLayout(page: any) {
  const MainLayout = require('@/layouts/MainLayout').default;
  return <MainLayout>{page}</MainLayout>;
};
