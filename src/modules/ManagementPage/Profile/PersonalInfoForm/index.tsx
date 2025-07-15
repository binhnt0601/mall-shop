import { Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";

const PersonalInfoSchema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
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
            label="Name"
            fullWidth
            disabled={!editing}
          />
          <FormikTextField
            name="email"
            label="Email"
            fullWidth
            disabled={!editing}
          />
        </Stack>
      </Form>
    </Formik>
  );
}
