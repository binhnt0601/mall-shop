'use client';
import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function IeltsAudio() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant='h4'
        sx={{ mb: 3, fontWeight: 'bold', color: '#004d40' }}
      >
        Listening Practice
      </Typography>
      <Paper
        sx={{ p: 3, maxWidth: 600, mx: 'auto', textAlign: 'center' }}
        elevation={3}
      >
        <Typography variant='body1' sx={{ mb: 2 }}>
          Listen to the audio below and try to answer related questions.
        </Typography>
        <audio controls>
          <source src='/audios/sample-listening.mp3' type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </Paper>
    </Box>
  );
}
