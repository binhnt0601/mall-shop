'use client';

import React, { useState } from 'react';

type Step = {
  step: number;
  title: string;
  objectives: string[];
  studyInfo: string[];
  ctaLabel: string;
  ctaHref: string;
};

type CourseGroup = {
  groupTitle: string;
  steps: Step[];
};

const courseGroups: CourseGroup[] = [
  {
    groupTitle: 'IELTS Junior',
    steps: [
      {
        step: 1,
        title: 'Pre-Junior',
        objectives: [
          'Build English foundation and communication skills',
          'Prepare basic English grammar and vocabulary',
        ],
        studyInfo: [
          'Duration: 3 months',
          'Classes 3 times a week',
          'Focus on listening and speaking skills',
        ],
        ctaLabel: 'View Details',
        ctaHref: '/courses/pre-junior',
      },
      {
        step: 2,
        title: 'Junior 1',
        objectives: [
          'Develop basic writing and reading skills',
          'Prepare for A1-A2 level exams',
          'Build confidence in daily communication',
        ],
        studyInfo: [
          'Duration: 4 months',
          'Classes 3 times a week',
          'Practice with mock exams',
        ],
        ctaLabel: 'View Details',
        ctaHref: '/courses/junior-1',
      },
      {
        step: 3,
        title: 'Junior 2',
        objectives: [
          'Improve grammar and vocabulary to B1 level',
          'Develop essay writing skills',
          'Prepare for IELTS Junior exam',
        ],
        studyInfo: [
          'Duration: 4 months',
          'Classes 3 times a week',
          'Focus on all 4 skills: reading, writing, listening, speaking',
        ],
        ctaLabel: 'View Details',
        ctaHref: '/courses/junior-2',
      },
    ],
  },
  {
    groupTitle: 'IELTS Senior',
    steps: [
      {
        step: 1,
        title: 'Senior 1',
        objectives: [
          'Master intermediate grammar and vocabulary',
          'Develop academic writing skills',
          'Prepare for IELTS band 5.0',
        ],
        studyInfo: [
          'Duration: 5 months',
          'Classes 4 times a week',
          'Practice with real IELTS exam materials',
        ],
        ctaLabel: 'View Details',
        ctaHref: '/courses/senior-1',
      },
      {
        step: 2,
        title: 'Senior 2',
        objectives: [
          'Refine listening and speaking skills',
          'Advanced essay writing',
          'Prepare for IELTS band 6.0',
        ],
        studyInfo: [
          'Duration: 5 months',
          'Classes 4 times a week',
          'Individualized feedback and coaching',
        ],
        ctaLabel: 'View Details',
        ctaHref: '/courses/senior-2',
      },
    ],
  },
  {
    groupTitle: 'IELTS Advanced',
    steps: [
      {
        step: 1,
        title: 'Advanced 1',
        objectives: [
          'Perfect advanced grammar and vocabulary',
          'Master all IELTS question types',
          'Aim for band 7.0+',
        ],
        studyInfo: [
          'Duration: 6 months',
          'Classes 5 times a week',
          'Mock exams with detailed analysis',
        ],
        ctaLabel: 'View Details',
        ctaHref: '/courses/advanced-1',
      },
      {
        step: 2,
        title: 'Advanced 2',
        objectives: [
          'Expert-level essay and speaking skills',
          'Strategies for high band score',
          'Prepare for real test conditions',
        ],
        studyInfo: [
          'Duration: 6 months',
          'Classes 5 times a week',
          'One-on-one coaching sessions',
        ],
        ctaLabel: 'View Details',
        ctaHref: '/courses/advanced-2',
      },
    ],
  },
];

export default function CourseRoadmap() {
  const [selectedGroup, setSelectedGroup] = useState<CourseGroup>(
    courseGroups[0],
  );

  return (
    <section className='max-w-7xl mx-auto p-6'>
      <h2 className='text-center text-4xl font-bold mb-12'>Course Roadmaps</h2>

      {/* Group selector */}
      <div className='flex justify-center gap-6 mb-10 flex-wrap'>
        {courseGroups.map((group) => (
          <button
            key={group.groupTitle}
            onClick={() => setSelectedGroup(group)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedGroup.groupTitle === group.groupTitle
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            {group.groupTitle}
          </button>
        ))}
      </div>

      {/* Roadmap steps */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {selectedGroup.steps.map(
          ({ step, title, objectives, studyInfo, ctaLabel, ctaHref }) => (
            <div
              key={step}
              className='relative rounded-lg border border-gray-300 p-8 shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1'
              style={{ animation: 'fade-in-up 0.5s ease forwards' }}
            >
              <div className='absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-lg shadow-md'>
                {step}
              </div>

              <h3 className='mb-4 mt-6 text-2xl font-semibold text-indigo-700'>
                {title}
              </h3>

              <div className='mb-4'>
                <h4 className='mb-2 font-semibold text-gray-800'>Objectives</h4>
                <ul className='list-disc list-inside text-gray-700 space-y-1'>
                  {objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div className='mb-6'>
                <h4 className='mb-2 font-semibold text-gray-800'>Study Info</h4>
                <ul className='list-disc list-inside text-gray-700 space-y-1'>
                  {studyInfo.map((info, i) => (
                    <li key={i}>{info}</li>
                  ))}
                </ul>
              </div>

              <a
                href={ctaHref}
                className='inline-block rounded-full border border-indigo-600 bg-indigo-50 px-6 py-2 text-indigo-700 font-semibold shadow-sm transition hover:bg-indigo-600 hover:text-white'
                aria-label={`${title} course details`}
              >
                {ctaLabel}
              </a>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
