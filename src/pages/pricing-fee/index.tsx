'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  MenuItem,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MainLayout from '@/layouts/MainLayout';

const courses = [
  {
    level: 'Beginner',
    duration: '3 months',
    price: 150,
    description:
      'For learners starting from scratch, focusing on basic grammar, vocabulary, and speaking skills.',
  },
  {
    level: 'Intermediate',
    duration: '3 months',
    price: 200,
    description:
      'For those who know the basics and want to improve conversation, writing, and comprehension.',
  },
  {
    level: 'Advanced',
    duration: '3 months',
    price: 250,
    description:
      'For learners aiming for fluency, advanced grammar, idioms, and professional English usage.',
  },
  {
    level: 'Conversation Practice',
    duration: '1 month',
    price: 100,
    description:
      'Focused speaking practice to improve fluency and confidence in daily conversations.',
  },
];

const faqs = [
  {
    question: 'What is the refund policy?',
    answer:
      'You can request a full refund within the first two weeks of your course if you are not satisfied.',
  },
  {
    question: 'Are there any prerequisites?',
    answer:
      'No prerequisites. We welcome all levels from beginners to advanced learners.',
  },
  {
    question: 'How can I contact my instructor?',
    answer:
      'You will get access to our online platform where you can message your instructor anytime.',
  },
  {
    question: 'Do you offer certificates?',
    answer:
      'Yes, upon successful course completion, you will receive an official certificate.',
  },
];

const PricingFeePage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = 'Email is invalid';
    if (!formData.course) errors.course = 'Please select a course';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: Gửi data lên API đăng ký
    setSnackbar({
      open: true,
      message: `Registration successful for ${formData.course}, thank you ${formData.name}!`,
      severity: 'success',
    });
    setFormData({ name: '', email: '', course: '' });
  };

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#f0f4ff',
        minHeight: 'calc(100vh - 152px)',
      }}
    >
      <Container maxWidth='md'>
        <Typography
          variant='h3'
          gutterBottom
          textAlign='center'
          color='#035a8e'
          fontWeight='bold'
          sx={{ mb: 2 }}
        >
          Tuition Fees
        </Typography>
        <Typography
          variant='body1'
          textAlign='center'
          mb={6}
          sx={{ fontSize: '1.1rem', color: '#333' }}
        >
          Select the course that best suits your English learning journey. Each
          course is carefully designed to help you progress step-by-step with
          experienced instructors and proven methods.
        </Typography>

        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ backgroundColor: '#035a8e' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  Course Level
                </TableCell>
                <TableCell
                  sx={{ color: 'white', fontWeight: 'bold' }}
                  align='center'
                >
                  Duration
                </TableCell>
                <TableCell
                  sx={{ color: 'white', fontWeight: 'bold' }}
                  align='center'
                >
                  Price (USD)
                </TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map(({ level, duration, price, description }) => (
                <TableRow key={level} hover>
                  <TableCell sx={{ fontWeight: '600' }}>{level}</TableCell>
                  <TableCell align='center'>{duration}</TableCell>
                  <TableCell align='center'>${price}</TableCell>
                  <TableCell sx={{ maxWidth: 300, whiteSpace: 'normal' }}>
                    {description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant='h4'
          gutterBottom
          color='#035a8e'
          fontWeight='bold'
          textAlign='center'
          sx={{ mb: 3 }}
        >
          Frequently Asked Questions
        </Typography>
        {faqs.map(({ question, answer }, idx) => (
          <Accordion key={idx} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${idx}-content`}
              id={`panel${idx}-header`}
            >
              <Typography sx={{ fontWeight: 'bold' }}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <Divider sx={{ my: 4 }} />

        <Typography
          variant='h4'
          gutterBottom
          color='#035a8e'
          fontWeight='bold'
          textAlign='center'
          sx={{ mb: 3 }}
        >
          Register for a Course
        </Typography>

        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 480,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label='Full Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            fullWidth
            required
          />
          <TextField
            label='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            fullWidth
            required
          />
          <TextField
            label='Select Course'
            name='course'
            select
            value={formData.course}
            onChange={handleChange}
            error={!!formErrors.course}
            helperText={formErrors.course}
            fullWidth
            required
          >
            {courses.map(({ level }) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>

          <Button
            type='submit'
            variant='contained'
            sx={{
              mt: 2,
              backgroundColor: '#035a8e',
              '&:hover': { backgroundColor: '#023e5f' },
            }}
          >
            Register
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Typography
          variant='subtitle1'
          textAlign='center'
          color='text.secondary'
          sx={{ fontStyle: 'italic', fontSize: '1rem' }}
        >
          We offer flexible payment plans and special discounts for early
          sign-ups, groups, and referrals. Contact our support team to learn
          more about available options.
        </Typography>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PricingFeePage;

PricingFeePage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
