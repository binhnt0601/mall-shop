import {
  Modal,
  Box,
  Button,
  TextField,
  Stack,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function PasswordModal({ open, user, onClose, onSave }: any) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          bgcolor: "#fff",
          p: 3,
          borderRadius: 3,
          minWidth: 320,
          maxWidth: 400,
          mx: "auto",
          mt: "12vh",
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Change Password
        </Typography>
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
            repeatPassword: "",
          }}
          enableReinitialize
          validationSchema={Yup.object({
            currentPassword: Yup.string().required("Current password required"),
            newPassword: Yup.string()
              .min(6, "Min 6 chars")
              .required("New password required"),
            repeatPassword: Yup.string()
              .oneOf([Yup.ref("newPassword")], "Passwords do not match")
              .required("Confirm your new password"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            await onSave?.(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ values, errors, touched, handleChange, isSubmitting }) => (
            <Form>
              <Stack spacing={2}>
                <TextField
                  label="Current Password"
                  name="currentPassword"
                  type="password"
                  value={values.currentPassword}
                  onChange={handleChange}
                  error={!!touched.currentPassword && !!errors.currentPassword}
                  helperText={touched.currentPassword && errors.currentPassword}
                  fullWidth
                />
                <TextField
                  label="New Password"
                  name="newPassword"
                  type="password"
                  value={values.newPassword}
                  onChange={handleChange}
                  error={!!touched.newPassword && !!errors.newPassword}
                  helperText={touched.newPassword && errors.newPassword}
                  fullWidth
                />
                <TextField
                  label="Repeat New Password"
                  name="repeatPassword"
                  type="password"
                  value={values.repeatPassword}
                  onChange={handleChange}
                  error={!!touched.repeatPassword && !!errors.repeatPassword}
                  helperText={touched.repeatPassword && errors.repeatPassword}
                  fullWidth
                />
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    onClick={onClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
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
