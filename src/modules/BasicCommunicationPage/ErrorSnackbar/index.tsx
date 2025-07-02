'use client';

import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface ErrorSnackbarProps {
  message: string;
  onClose: () => void;
  open: boolean;
}

const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({
  message,
  onClose,
  open,
}) => {
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
      <Alert onClose={onClose} severity='warning' sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorSnackbar;
