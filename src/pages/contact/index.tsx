"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  MenuItem,
  Divider,
  Grid,
} from "@mui/material";
import React, { useState } from "react";

import MainLayout from "@/layouts/MainLayout";

const courses = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Conversation Practice",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Invalid email";
    if (formData.phone && !/^\+?[\d\s-]{7,15}$/.test(formData.phone))
      errors.phone = "Invalid phone number";
    if (!formData.course) errors.course = "Please select a course";
    if (!formData.message.trim()) errors.message = "Message is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      // simulate sending data
      await new Promise((r) => setTimeout(r, 1500));

      setSnackbar({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });

      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to send message. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        py: 8,
        minHeight: "calc(100vh - 152px)",
        backgroundColor: "#f0f4ff",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          color="#035a8e"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Contact Us
        </Typography>
        <Typography variant="body1" textAlign="center" mb={6}>
          Have questions or feedback? Send us a message and we will get back to
          you soon.
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
              noValidate
            >
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
                required
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "black",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "rgba(3,90,142,0.85)" },
                }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                required
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "black",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "rgba(3,90,142,0.85)" },
                }}
              />
              <TextField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!formErrors.phone}
                helperText={formErrors.phone || "Optional"}
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "black",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "rgba(3,90,142,0.85)" },
                }}
              />
              <TextField
                select
                label="Select Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                error={!!formErrors.course}
                helperText={formErrors.course}
                required
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "black",
                    "& .MuiSelect-select": {
                      color: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "rgba(3,90,142,0.85)" },
                }}
              >
                {courses.map((course) => (
                  <MenuItem key={course} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Message"
                name="message"
                multiline
                minRows={4}
                value={formData.message}
                onChange={handleChange}
                error={!!formErrors.message}
                helperText={formErrors.message}
                required
                fullWidth
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "black",
                    "& .MuiInputBase-input": {
                      color: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: { color: "rgba(3,90,142,0.85)" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  backgroundColor: "#fc9a14",
                  "&:hover": { backgroundColor: "#e38b0a" },
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundColor: "#035a8e",
                color: "#fff",
                p: 4,
                borderRadius: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: 3,
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                mb={2}
                textAlign="center"
              >
                Contact Information
              </Typography>
              <Typography variant="body1" mb={1}>
                📞 Phone:{" "}
                <a
                  href="tel:+1234567890"
                  style={{ color: "#fc9a14", textDecoration: "none" }}
                >
                  +1 (234) 567-890
                </a>
              </Typography>
              <Typography variant="body1" mb={1}>
                📧 Email:{" "}
                <a
                  href="mailto:info@englishclass.com"
                  style={{ color: "#fc9a14", textDecoration: "none" }}
                >
                  info@englishclass.com
                </a>
              </Typography>
              <Typography variant="body1" mb={1}>
                📍 Address: 123 English St, Language City, USA
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page: any) {
  return <MainLayout>{page}</MainLayout>;
};
