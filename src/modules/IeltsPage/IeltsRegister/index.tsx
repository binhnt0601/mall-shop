"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";
import React, { useState } from "react";

const courseOptions = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
  { label: "Conversation Practice", value: "conversation" },
];

export default function IeltsRegister() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    course: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.fullName && form.email && form.course) {
      setSubmitted(true);
    }
  };

  return (
    <Box id="register" sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3, fontWeight: "bold", color: "#004d40" }}
      >
        Register for IELTS Course
      </Typography>
      {!submitted ? (
        <Paper sx={{ p: 4, maxWidth: 600, mx: "auto" }} elevation={3}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 3 }}
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 3 }}
            />
            <TextField
              select
              label="Select Course"
              name="course"
              value={form.course}
              onChange={handleChange}
              fullWidth
              required
              sx={{ mb: 3 }}
            >
              {courseOptions.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      ) : (
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ color: "#00796b", mt: 3, fontWeight: "bold" }}
        >
          Thank you for registering! We will contact you soon.
        </Typography>
      )}
    </Box>
  );
}
