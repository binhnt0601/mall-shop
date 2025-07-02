'use client';

import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import OnlineCourseCard from '@/modules/EnglishOnlinePage/OnlineCourseCard';
import CourseFilter from '@/modules/EnglishOnlinePage/CourseFilter';
import MainLayout from '@/layouts/MainLayout';

const allCourses = [
  {
    id: 'english-beginner',
    title: 'English for Beginners',
    description:
      'Learn the basics of English grammar, vocabulary, and pronunciation.',
    duration: '3 months',
    price: 120,
    image: '/courses/beginner.jpg',
    category: 'General',
    detail:
      'This course covers fundamental grammar, basic vocabulary and pronunciation to start your English journey confidently.',
  },
  {
    id: 'conversational-english',
    title: 'Conversational English',
    description:
      'Improve your speaking skills through practical conversation practice.',
    duration: '2 months',
    price: 150,
    image: '/courses/conversation.jpg',
    category: 'General',
    detail:
      'Practical lessons focused on everyday conversations, idioms, and expressions for fluency.',
  },
  {
    id: 'business-english',
    title: 'Business English',
    description:
      'Master English skills tailored for professional and business contexts.',
    duration: '4 months',
    price: 200,
    image: '/courses/business.jpg',
    category: 'Professional',
    detail:
      'Learn business vocabulary, email writing, presentations, negotiations, and more.',
  },
  {
    id: 'ielts-preparation',
    title: 'IELTS Preparation',
    description:
      'Prepare effectively for the IELTS exam with experienced instructors.',
    duration: '5 months',
    price: 300,
    image: '/courses/ielts.jpg',
    category: 'Exam',
    detail:
      'Focused training on IELTS Listening, Reading, Writing and Speaking with test strategies.',
  },
];

const categories = ['All', 'General', 'Professional', 'Exam'];

export default function OnlineCoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCourses =
    selectedCategory === 'All'
      ? allCourses
      : allCourses.filter((course) => course.category === selectedCategory);

  return (
    <Container maxWidth='lg' sx={{ py: 8 }}>
      <Typography
        variant='h3'
        fontWeight='bold'
        color='#035a8e'
        textAlign='center'
        gutterBottom
      >
        Our Online Courses
      </Typography>
      <Typography
        variant='body1'
        color='text.secondary'
        textAlign='center'
        mb={6}
      >
        Select the course that fits your learning goals. Click "View Details"
        for more info.
      </Typography>

      <CourseFilter
        selected={selectedCategory}
        options={categories}
        onChange={setSelectedCategory}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {filteredCourses.map((course) => (
          <OnlineCourseCard key={course.id} course={course} />
        ))}
      </div>
    </Container>
  );
}

OnlineCoursesPage.getLayout = function getLayout(page: React.ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};
