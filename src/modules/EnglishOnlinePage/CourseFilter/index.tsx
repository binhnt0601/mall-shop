'use client';

import React from 'react';
import { Box, Button, Stack } from '@mui/material';

interface CourseFilterProps {
  selected: string;
  options: string[];
  onChange: (selected: string) => void;
}

export default function CourseFilter({
  selected,
  options,
  onChange,
}: CourseFilterProps) {
  return (
    <Stack direction='row' spacing={2} justifyContent='center' mb={6}>
      {options.map((opt) => (
        <Button
          key={opt}
          variant={opt === selected ? 'contained' : 'outlined'}
          color='primary'
          onClick={() => onChange(opt)}
          sx={{ textTransform: 'none', fontWeight: 'bold' }}
        >
          {opt}
        </Button>
      ))}
    </Stack>
  );
}
