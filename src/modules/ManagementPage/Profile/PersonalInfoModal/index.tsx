import CloseIcon from "@mui/icons-material/Close";
import {
  Modal,
  Box,
  Button,
  TextField,
  Stack,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";

export default function PersonalInfoModal({
  open,
  user,
  onClose,
  onSave,
}: any) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#fff",
          p: { xs: 2, md: 4 },
          borderRadius: 3,
          minWidth: { xs: 320, md: 400 },
          maxWidth: 420,
          mx: "auto",
          mt: "10vh",
          position: "relative",
          boxShadow: 6,
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: 12, right: 12, zIndex: 1 }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Stack alignItems="center" spacing={1} mb={2}>
          <Avatar src={user?.avatar} sx={{ width: 64, height: 64, mb: 1 }} />
          <Typography variant="h6" fontWeight="bold">
            Edit Personal Info
          </Typography>
        </Stack>
        <Formik
          initialValues={{
            name: user?.name || "",
            email: user?.email || "",
          }}
          enableReinitialize
          validationSchema={Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
              .email("Invalid email")
              .required("Email is required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            // Call your updateProfile API here
            try {
              await onSave?.(values); // Nếu có callback
              onClose();
            } catch (e) {
              // handle error
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <Form>
              <Stack spacing={2}>
                <TextField
                  label="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.name && !!errors.name}
                  //   helperText={touched.name && errors.name}
                  fullWidth
                  autoFocus
                />
                <TextField
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.email && !!errors.email}
                  //   helperText={touched.email && errors.email}
                  fullWidth
                  disabled // Chỉ sửa tên, email thường không cho đổi!
                />
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    onClick={onClose}
                    disabled={isSubmitting}
                    sx={{ flex: 1 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                    sx={{ flex: 2 }}
                  >
                    Save
                  </Button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}
