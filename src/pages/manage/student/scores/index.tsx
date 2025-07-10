"use client";

import { t } from "@lingui/macro";
import { Box, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import AdminLayout from "@/layouts/admin-layout/AdminLayout";
import ScoreStatusFilter from "@/modules/ManagementPage/Student/Scores/ScoreStatusFilter";
import StudentScoreTable from "@/modules/ManagementPage/Student/Scores/ScoreTable";
import { Score } from "@/services/score/score.model";
import { ScoreService } from "@/services/score/score.repo";
import { useAuthStore } from "@/stores/auth/useAuthStore";

const StudentScoresPage = () => {
  const [status, setStatus] = useState<string>("ALL");
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { auth } = useAuthStore();

  useEffect(() => {
    if (!auth?.id) return;
    setLoading(true);
    ScoreService.getScoresByStudent(auth.id)
      .then((data) => {
        setScores(data || []);
        setError("");
      })
      .catch((e) => {
        setError(e?.message || "Failed to fetch scores");
      })
      .finally(() => setLoading(false));
  }, [auth?.id]);

  const filteredScores =
    status === "ALL" ? scores : scores.filter((c) => c.status === status);

  return (
    <Box maxWidth="lg" mx="auto" py={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        {t`My Scores`}
      </Typography>
      <Stack mb={2} direction="row" spacing={2}>
        <ScoreStatusFilter value={status} onChange={setStatus} />
      </Stack>

      {loading && <Typography>{t`Loading...`}</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {!loading && !error && <StudentScoreTable data={filteredScores} />}
    </Box>
  );
};

StudentScoresPage.Layout = AdminLayout;
export default StudentScoresPage;
