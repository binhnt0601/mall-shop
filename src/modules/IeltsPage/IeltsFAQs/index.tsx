"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";

const faqs = [
  {
    question: "What is the duration of the IELTS Preparation course?",
    answer:
      "Our IELTS course typically runs for 3 months with flexible scheduling options.",
  },
  {
    question: "Do you provide official IELTS practice materials?",
    answer: "Yes, we provide up-to-date official practice tests and materials.",
  },
  {
    question: "Can I retake the course if I am not satisfied with my score?",
    answer:
      "We offer a free retake within 6 months for students who meet course requirements.",
  },
];

export default function IeltsFAQs() {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: "bold", color: "#004d40" }}
      >
        Frequently Asked Questions
      </Typography>
      {faqs.map(({ question, answer }, idx) => (
        <Accordion key={idx} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold" color="#00796b">
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
