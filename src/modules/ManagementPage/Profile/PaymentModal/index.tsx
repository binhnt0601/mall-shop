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

export default function PaymentModal({ open, user, onClose, onSave }: any) {
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
          Edit Payment Info
        </Typography>
        <Formik
          initialValues={{
            bankName: user?.payment?.bankName || "",
            accountHolderName: user?.payment?.accountHolderName || "",
            bankNumber: user?.payment?.bankNumber || "",
          }}
          enableReinitialize
          validationSchema={Yup.object({
            bankName: Yup.string().required("Bank name required"),
            accountHolderName: Yup.string().required(
              "Account holder name required"
            ),
            bankNumber: Yup.string().required("Bank number required"),
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
                  label="Bank Name"
                  name="bankName"
                  value={values.bankName}
                  onChange={handleChange}
                  error={!!touched.bankName && !!errors.bankName}
                  // helperText={touched.bankName && errors.bankName}
                  fullWidth
                />
                <TextField
                  label="Account Holder Name"
                  name="accountHolderName"
                  value={values.accountHolderName}
                  onChange={handleChange}
                  error={
                    !!touched.accountHolderName && !!errors.accountHolderName
                  }
                  // helperText={
                  //   touched.accountHolderName && errors.accountHolderName
                  // }
                  fullWidth
                />
                <TextField
                  label="Bank Number"
                  name="bankNumber"
                  value={values.bankNumber}
                  onChange={handleChange}
                  error={!!touched.bankNumber && !!errors.bankNumber}
                  // helperText={touched.bankNumber && errors.bankNumber}
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
