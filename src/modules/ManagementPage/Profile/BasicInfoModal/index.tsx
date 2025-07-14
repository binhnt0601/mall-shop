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

export default function BasicInfoModal({ open, user, onClose, onSave }: any) {
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
          Edit Basic Info
        </Typography>
        <Formik
          initialValues={{
            phone: user?.phone || "",
            address: user?.address || "",
          }}
          enableReinitialize
          validationSchema={Yup.object({
            phone: Yup.string().required("Phone required"),
            address: Yup.string(),
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
                  label="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  error={!!touched.phone && !!errors.phone}
                  // helperText={touched.phone && errors.phone}
                  fullWidth
                />
                <TextField
                  label="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  error={!!touched.address && !!errors.address}
                  // helperText={touched.address && errors.address}
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
