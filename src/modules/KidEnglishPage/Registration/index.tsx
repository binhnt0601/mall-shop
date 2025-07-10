"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
} from "@mui/material";
import React, { useState } from "react";

const courseOptions = [
  { label: "Beginner (3-5 years)", value: "beginner" },
  { label: "Intermediate (6-8 years)", value: "intermediate" },
  { label: "Advanced (9-12 years)", value: "advanced" },
];

export default function KidEnglishRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    course: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Validate & send form data to backend
    setSuccess(true);
  };

  return (
    <Box sx={{ mb: 8, p: 4, bgcolor: "#fff3e0", borderRadius: 3 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, color: "#6d4c41" }}
      >
        Register for Kid English Course
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Child's Name"
          name="name"
          fullWidth
          required
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Child's Age"
          name="age"
          fullWidth
          required
          type="number"
          margin="normal"
          inputProps={{ min: 3, max: 12 }}
          value={formData.age}
          onChange={handleChange}
        />
        <TextField
          label="Parent Email"
          name="email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Select Course Level"
          name="course"
          select
          fullWidth
          required
          margin="normal"
          value={formData.course}
          onChange={handleChange}
        >
          {courseOptions.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ mt: 3, px: 6, py: 1.5, fontWeight: "bold" }}
        >
          Submit Registration
        </Button>
      </form>
      {success && (
        <Alert severity="success" sx={{ mt: 3 }}>
          Thank you for registering! We will contact you soon.
        </Alert>
      )}
    </Box>
  );
}
