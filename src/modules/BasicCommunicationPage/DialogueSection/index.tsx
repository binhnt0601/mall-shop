'use client';

import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

const dialogueAudioUrl = '/audio/basic-communication-dialogue.mp3';

const DialogueSection = () => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      mb: 8,
      backgroundColor: 'white',
      borderRadius: 3,
      maxWidth: 900,
      mx: 'auto',
      boxShadow: '0 10px 25px rgba(3,90,142,0.12)',
    }}
  >
    <Typography variant='h5' fontWeight='bold' mb={2} color='#035a8e'>
      Sample Dialogue
    </Typography>
    <Typography sx={{ mb: 1 }}>
      <strong>Anna:</strong> Hello! How are you today?
    </Typography>
    <Typography sx={{ mb: 1 }}>
      <strong>Ben:</strong> I’m fine, thank you. And you?
    </Typography>
    <Typography sx={{ mb: 2 }}>
      <strong>Anna:</strong> I’m great, thanks for asking!
    </Typography>
    <audio controls style={{ width: '100%', outline: 'none' }}>
      <source src={dialogueAudioUrl} type='audio/mp3' />
      Your browser does not support the audio element.
    </audio>
  </Paper>
);

export default DialogueSection;
