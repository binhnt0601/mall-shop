import { Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";

const PasswordSchema = Yup.object({
  currentPassword: Yup.string().required("Enter current password"),
  newPassword: Yup.string()
    .min(6, "Min 6 chars")
    .required("Enter new password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Confirm your password"),
});

export default function PasswordForm({ editing, onSubmit }: any) {
  return (
    <Formik
      initialValues={{
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={PasswordSchema}
      onSubmit={onSubmit}
    >
      <Form id="passwordForm">
        <Stack spacing={2}>
          <FormikTextField
            name="currentPassword"
            label="Current Password"
            type="password"
            fullWidth
            disabled={!editing}
          />
          <FormikTextField
            name="newPassword"
            label="New Password"
            type="password"
            fullWidth
            disabled={!editing}
          />
          <FormikTextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            disabled={!editing}
          />
        </Stack>
      </Form>
    </Formik>
  );
}
