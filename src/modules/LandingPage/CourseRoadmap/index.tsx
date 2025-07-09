"use client";

import React, { useState } from "react";
import {
  FaCheckCircle,
  FaCalendarAlt,
  FaUserGraduate,
  FaLink,
} from "react-icons/fa";

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
    groupTitle: "IELTS Junior",
    steps: [
      {
        step: 1,
        title: "Pre-Junior",
        objectives: [
          "Build English foundation and communication skills",
          "Prepare basic English grammar and vocabulary",
        ],
        studyInfo: [
          "Duration: 3 months",
          "Classes 3 times a week",
          "Focus on listening and speaking skills",
        ],
        ctaLabel: "View Details",
        ctaHref: "/courses/pre-junior",
      },
      {
        step: 2,
        title: "Junior 1",
        objectives: [
          "Develop basic writing and reading skills",
          "Prepare for A1-A2 level exams",
          "Build confidence in daily communication",
        ],
        studyInfo: [
          "Duration: 4 months",
          "Classes 3 times a week",
          "Practice with mock exams",
        ],
        ctaLabel: "View Details",
        ctaHref: "/courses/junior-1",
      },
      {
        step: 3,
        title: "Junior 2",
        objectives: [
          "Improve grammar and vocabulary to B1 level",
          "Develop essay writing skills",
          "Prepare for IELTS Junior exam",
        ],
        studyInfo: [
          "Duration: 4 months",
          "Classes 3 times a week",
          "Focus on all 4 skills: reading, writing, listening, speaking",
        ],
        ctaLabel: "View Details",
        ctaHref: "/courses/junior-2",
      },
    ],
  },
  {
    groupTitle: "IELTS Senior",
    steps: [
      {
        step: 1,
        title: "Senior 1",
        objectives: [
          "Master intermediate grammar and vocabulary",
          "Develop academic writing skills",
          "Prepare for IELTS band 5.0",
        ],
        studyInfo: [
          "Duration: 5 months",
          "Classes 4 times a week",
          "Practice with real IELTS exam materials",
        ],
        ctaLabel: "View Details",
        ctaHref: "/courses/senior-1",
      },
      {
        step: 2,
        title: "Senior 2",
        objectives: [
          "Refine listening and speaking skills",
          "Advanced essay writing",
          "Prepare for IELTS band 6.0",
        ],
        studyInfo: [
          "Duration: 5 months",
          "Classes 4 times a week",
          "Individualized feedback and coaching",
        ],
        ctaLabel: "View Details",
        ctaHref: "/courses/senior-2",
      },
    ],
  },
  {
    groupTitle: "IELTS Advanced",
    steps: [
      {
        step: 1,
        title: "Advanced 1",
        objectives: [
          "Perfect advanced grammar and vocabulary",
          "Master all IELTS question types",
          "Aim for band 7.0+",
        ],
        studyInfo: [
          "Duration: 6 months",
          "Classes 5 times a week",
          "Mock exams with detailed analysis",
        ],
        ctaLabel: "View Details",
        ctaHref: "/courses/advanced-1",
      },
      {
        step: 2,
        title: "Advanced 2",
        objectives: [
          "Expert-level essay and speaking skills",
          "Strategies for high band score",
          "Prepare for real test conditions",
        ],
        studyInfo: [
          "Duration: 6 months",
          "Classes 5 times a week",
          "One-on-one coaching sessions",
        ],
        ctaLabel: "View Details",
        ctaHref: "/courses/advanced-2",
      },
    ],
  },
];

export default function CourseRoadmap() {
  const [selectedGroup, setSelectedGroup] = useState<CourseGroup>(
    courseGroups[0],
  );

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-center text-4xl font-bold mb-12">Course Roadmaps</h2>

      {/* Group selector */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {courseGroups.map((group) => (
          <button
            key={group.groupTitle}
            onClick={() => setSelectedGroup(group)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              selectedGroup.groupTitle === group.groupTitle
                ? "bg-[#4f46e5] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-indigo-500 hover:text-white"
            }`}
            aria-label={`Select ${group.groupTitle} roadmap`}
          >
            {group.groupTitle}
          </button>
        ))}
      </div>

      {/* Roadmap steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {selectedGroup.steps.map(
          ({ step, title, objectives, studyInfo, ctaLabel, ctaHref }) => (
            <div
              key={step}
              className="relative rounded-lg border border-transparent p-8 shadow-md hover:shadow-lg transition transform hover:-translate-y-1 group bg-white hover:animate-border-fade"
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-8 flex items-center gap-2 rounded-lg border border-indigo-300 bg-indigo-50 px-4 py-2 shadow-sm text-[#4f46e5] font-bold text-lg select-none group-hover:border-[#4f46e5] group-hover:bg-indigo-100 transition">
                <span className="rounded-full bg-indigo-100 w-8 h-8 flex items-center justify-center">
                  {step}
                </span>
                <span className="text-sm">Khoá học</span>
                <span className="text-lg font-semibold">{title}</span>
              </div>

              {/* Objectives */}
              <div className="mb-6 pt-8">
                <h4 className="mb-3 font-semibold text-gray-700 uppercase">
                  Mục tiêu
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="text-[#4f46e5] mt-1" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Study Info */}
              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-gray-700 uppercase">
                  Thông tin học tập
                </h4>
                <ul className="space-y-3 text-gray-600 text-sm">
                  {studyInfo.map((info, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {i === 0 && <FaCalendarAlt className="text-[#4f46e5]" />}
                      {i === 1 && <FaUserGraduate className="text-[#4f46e5]" />}
                      {i === 2 && <FaLink className="text-[#4f46e5]" />}
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded border border-[#4f46e5] px-6 py-2 font-semibold text-[#4f46e5] shadow-sm transition hover:bg-[#4f46e5] hover:text-white"
                aria-label={`${title} course details`}
              >
                <FaLink />
                {ctaLabel}
              </a>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
