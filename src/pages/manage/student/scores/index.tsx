"use client";

import { t } from "@lingui/macro";
import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import ScoreStatusFilter from "@/modules/ManagementPage/Student/Scores/ScoreStatusFilter";
import StudentScoreTable, {
  StudentScore,
} from "@/modules/ManagementPage/Student/Scores/ScoreTable";

const DUMMY_SCORES: StudentScore[] = [
  {
    id: "1",
    className: "IELTS Foundation",
    subject: "English",
    assignment: "Midterm Test",
    score: 86,
    maxScore: 100,
    status: "PASSED",
  },
  {
    id: "2",
    className: "Speaking Club",
    subject: "Speaking",
    assignment: "Presentation",
    score: 45,
    maxScore: 100,
    status: "FAILED",
  },
  {
    id: "3",
    className: "Business English",
    subject: "English",
    assignment: "Final Exam",
    score: 92,
    maxScore: 100,
    status: "PASSED",
  },
];

const StudentScoresPage = () => {
  const [status, setStatus] = useState<string>("ALL");

  const filteredScores =
    status === "ALL"
      ? DUMMY_SCORES
      : DUMMY_SCORES.filter((c) => c.status === status);

  return (
    <Box maxWidth="lg" mx="auto" py={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        {t`My Scores`}
      </Typography>
      <Stack mb={2} direction="row" spacing={2}>
        <ScoreStatusFilter value={status} onChange={setStatus} />
      </Stack>
      <StudentScoreTable data={filteredScores} />
    </Box>
  );
};

StudentScoresPage.Layout = AdminLayout;
export default StudentScoresPage;
