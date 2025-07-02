'use client';

import React, { useState, useRef } from 'react';
import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';

const VoiceRecorderSection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = () => {
    if (!navigator.mediaDevices) {
      alert('Media Devices API not supported');
      return;
    }
    audioChunks.current = [];
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        mediaRecorder.current.start();
        setIsRecording(true);
        mediaRecorder.current.ondataavailable = (event) => {
          audioChunks.current.push(event.data);
        };
        mediaRecorder.current.onstop = () => {
          const blob = new Blob(audioChunks.current, { type: 'audio/mp3' });
          const url = URL.createObjectURL(blob);
          setAudioURL(url);
          setIsRecording(false);
        };
      })
      .catch(() => alert('Could not access microphone'));
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
  };

  const resetRecording = () => {
    setAudioURL(null);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        mt: 8,
        maxWidth: 900,
        mx: 'auto',
        borderRadius: 3,
        boxShadow: '0 10px 25px rgba(3,90,142,0.12)',
        backgroundColor: 'white',
      }}
    >
      <Typography variant='h5' fontWeight='bold' color='#035a8e' mb={3}>
        Practice Speaking - Voice Recorder
      </Typography>
      <Typography mb={2} color='text.secondary'>
        Click start and practice speaking the sample dialogue above. Record your
        voice and listen back to improve your pronunciation.
      </Typography>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}
      >
        {!isRecording && (
          <Button
            variant='contained'
            color='primary'
            startIcon={<MicIcon />}
            onClick={startRecording}
          >
            Start Recording
          </Button>
        )}
        {isRecording && (
          <Button
            variant='outlined'
            color='error'
            startIcon={<StopIcon />}
            onClick={stopRecording}
          >
            Stop Recording
          </Button>
        )}
        {audioURL && (
          <>
            <audio src={audioURL} controls style={{ flex: 1, minWidth: 250 }} />
            <IconButton
              color='primary'
              onClick={resetRecording}
              aria-label='Reset recording'
            >
              <ReplayIcon />
            </IconButton>
            <Button
              variant='contained'
              color='success'
              startIcon={<SendIcon />}
              onClick={() => alert('Voice sent! (simulate send)')}
            >
              Send Recording
            </Button>
          </>
        )}
      </Box>
    </Paper>
  );
};

export default VoiceRecorderSection;
