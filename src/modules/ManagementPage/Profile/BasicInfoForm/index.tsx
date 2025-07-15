import { Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";

const BasicInfoSchema = Yup.object({
  phone: Yup.string(),
  address: Yup.string(),
  referralCode: Yup.string(),
});

export default function BasicInfoForm({ user, editing, onSubmit }: any) {
  return (
    <Formik
      initialValues={{
        phone: user?.phone || "",
        address: user?.address || "",
        referralCode: user?.referralCode || "",
      }}
      validationSchema={BasicInfoSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form id="basicForm">
        <Stack spacing={2}>
          <FormikTextField
            name="phone"
            label="Phone"
            fullWidth
            disabled={!editing}
          />
          <FormikTextField
            name="address"
            label="Address"
            fullWidth
            disabled={!editing}
          />
          <FormikTextField
            name="referralCode"
            label="Referral Code"
            fullWidth
            disabled
          />
        </Stack>
      </Form>
    </Formik>
  );
}
