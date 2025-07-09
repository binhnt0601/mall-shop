"use client";
import { Box, Typography, Grid, Paper } from "@mui/material";
import React from "react";

const skillsTopics = [
  {
    skill: "Listening",
    description:
      "Practice active listening through stories, songs, and audio exercises tailored for kids.",
  },
  {
    skill: "Speaking",
    description:
      "Encourage confident speaking with role plays, dialogues, and pronunciation games.",
  },
  {
    skill: "Reading",
    description:
      "Introduce simple stories, picture books, and reading comprehension activities.",
  },
  {
    skill: "Writing",
    description:
      "Develop basic writing skills with fun activities like drawing, labeling, and short sentences.",
  },
  {
    skill: "Vocabulary & Grammar",
    description:
      "Learn essential vocabulary and grammar structures through interactive lessons and games.",
  },
];

export default function KidEnglishSkills() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", color: "#6d4c41" }}
      >
        Core Skills & Topics
      </Typography>
      <Grid container spacing={4}>
        {skillsTopics.map(({ skill, description }) => (
          <Grid item xs={12} md={4} key={skill}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#ffe0b2",
                color: "#5d4037",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {skill}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
