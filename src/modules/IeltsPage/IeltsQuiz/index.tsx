"use client";
import {
  Box,
  Typography,
  Button,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

const quizSample = {
  question: "What does IELTS stand for?",
  options: [
    "International English Language Testing System",
    "International English Language Teaching Service",
    "International English Learning Test Standard",
    "International Exam of Language Testing System",
  ],
  answer: 0,
};

export default function IeltsQuiz() {
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(event.target.value));
    setFeedback(null);
  };

  const handleSubmit = () => {
    if (selected === quizSample.answer) {
      setFeedback(
        "Correct! IELTS stands for International English Language Testing System.",
      );
    } else {
      setFeedback("Incorrect. Please try again.");
    }
  };

  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: "bold", color: "#004d40" }}
      >
        Quiz Sample
      </Typography>
      <Paper sx={{ p: 3, maxWidth: 600, mx: "auto" }} elevation={3}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {quizSample.question}
        </Typography>
        <RadioGroup
          value={selected !== null ? selected.toString() : ""}
          onChange={handleChange}
        >
          {quizSample.options.map((opt, i) => (
            <FormControlLabel
              key={opt}
              value={i.toString()}
              control={<Radio />}
              label={opt}
              sx={{ color: "#00796b" }}
            />
          ))}
        </RadioGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={selected === null}
        >
          Submit
        </Button>
        {feedback && (
          <Typography
            sx={{
              mt: 2,
              fontWeight: "bold",
              color: feedback.startsWith("Correct") ? "green" : "red",
            }}
          >
            {feedback}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
