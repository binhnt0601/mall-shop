"use client";

import { t } from "@lingui/macro";
import { Box, Typography, Stack } from "@mui/material";
import { useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import AssignmentStatusFilter from "@/modules/ManagementPage/Student/Assignments/AssignmentStatusFilter";
import AssignmentTable, {
  StudentAssignment,
} from "@/modules/ManagementPage/Student/Assignments/AssignmentTable";

export const DUMMY_ASSIGNMENTS: StudentAssignment[] = [
  {
    id: "A01",
    title: "Essay: My Favorite Book",
    className: "IELTS Foundation",
    dueDate: "2024-07-10",
    status: "GRADED",
    grade: "A",
  },
  {
    id: "A02",
    title: "Business Email Practice",
    className: "English for Business",
    dueDate: "2024-07-22",
    status: "SUBMITTED",
    grade: undefined,
  },
  {
    id: "A03",
    title: "Presentation: Dream Job",
    className: "Speaking Club",
    dueDate: "2024-07-25",
    status: "PENDING",
    grade: undefined,
  },
  {
    id: "A04",
    title: "Grammar Quiz 1",
    className: "IELTS Foundation",
    dueDate: "2024-07-03",
    status: "OVERDUE",
    grade: undefined,
  },
];

const StudentAssignmentsPage = () => {
  const [status, setStatus] = useState("ALL");

  const filteredAssignments =
    status === "ALL"
      ? DUMMY_ASSIGNMENTS
      : DUMMY_ASSIGNMENTS.filter((a) => a.status === status);

  return (
    <Box maxWidth="lg" mx="auto" py={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        {t`Assignments`}
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
        <AssignmentStatusFilter value={status} onChange={setStatus} />
      </Stack>
      <AssignmentTable data={filteredAssignments} />
    </Box>
  );
};

StudentAssignmentsPage.Layout = AdminLayout;
export default StudentAssignmentsPage;
