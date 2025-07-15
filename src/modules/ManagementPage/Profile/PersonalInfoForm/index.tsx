import { t } from "@lingui/macro";
import { Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";

const PersonalInfoSchema = Yup.object({
  name: Yup.string().required(t`Name required`),
  email: Yup.string()
    .email(t`Invalid email`)
    .required(t`Email required`),
});

export default function PersonalInfoForm({ user, editing, onSubmit }: any) {
  return (
    <Formik
      initialValues={{
        name: user?.name || "",
        email: user?.email || "",
      }}
      validationSchema={PersonalInfoSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form id="personalForm">
        <Stack spacing={2}>
          <FormikTextField
            name="name"
            label={t`Name`}
            fullWidth
            disabled={!editing}
          />
          <FormikTextField name="email" label={t`Email`} fullWidth disabled />
        </Stack>
      </Form>
    </Formik>
  );
}
