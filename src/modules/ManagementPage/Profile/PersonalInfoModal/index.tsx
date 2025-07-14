import {
  Modal,
  Box,
  Button,
  TextField,
  Stack,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";

export default function PersonalInfoModal({ open, user, onClose }: any) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 4,
          borderRadius: 2,
          minWidth: 350,
          mx: "auto",
          mt: "10vh",
        }}
      >
        <Formik
          initialValues={{ name: user.name, email: user.email }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name required"),
            email: Yup.string()
              .email("Invalid email")
              .required("Email required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            // await updateProfile({ name: values.name, email: values.email });
            setSubmitting(false);
            onClose();
          }}
        >
          {({ values, errors, touched, handleChange, isSubmitting }) => (
            <Form>
              <Stack spacing={2}>
                <Typography variant="h6" fontWeight="bold">
                  Edit Personal Info
                </Typography>
                <TextField
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  //   helperText={touched.name && errors.name}
                  fullWidth
                />
                <TextField
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  //   helperText={touched.email && errors.email}
                  fullWidth
                />
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                >
                  Save
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}
