'use client';

import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import HeaderSection from '@/modules/BasicCommunicationPage/HeaderSection';
import DialogueSection from '@/modules/BasicCommunicationPage/DialogueSection';
import QuizSection from '@/modules/BasicCommunicationPage/QuizSection';
import VoiceRecorderSection from '@/modules/BasicCommunicationPage/VoiceRecorderSection';
import ErrorSnackbar from '@/modules/BasicCommunicationPage/ErrorSnackbar';
import MainLayout from '@/layouts/MainLayout';

const BasicCommunicationPage = () => {
  // Lift error message to parent to show Snackbar globally
  const [errorMsg, setErrorMsg] = useState('');

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 152px)',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)',
        py: { xs: 4, md: 8 },
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
        <HeaderSection />

        <DialogueSection />

        <QuizSection setErrorMsg={setErrorMsg} />

        <VoiceRecorderSection />

        <ErrorSnackbar
          open={Boolean(errorMsg)}
          message={errorMsg}
          onClose={() => setErrorMsg('')}
        />
      </Container>
    </Box>
  );
};

export default BasicCommunicationPage;

BasicCommunicationPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
