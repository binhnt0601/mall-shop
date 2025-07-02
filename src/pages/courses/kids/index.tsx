'use client';
import React from 'react';
import { Container } from '@mui/material';
import KidEnglishIntro from '@/modules/KidEnglishPage/Introduction';
import KidEnglishPath from '@/modules/KidEnglishPage/EnglishPath';
import KidEnglishSkills from '@/modules/KidEnglishPage/EnglishSkills';
import KidEnglishFunActivities from '@/modules/KidEnglishPage/FunActivities';
import KidEnglishRegistration from '@/modules/KidEnglishPage/Registration';
import MainLayout from '@/layouts/MainLayout';

export default function KidEnglishPage() {
  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <KidEnglishIntro />
      <KidEnglishPath />
      <KidEnglishSkills />
      <KidEnglishFunActivities />
      <KidEnglishRegistration />
    </Container>
  );
}

KidEnglishPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
