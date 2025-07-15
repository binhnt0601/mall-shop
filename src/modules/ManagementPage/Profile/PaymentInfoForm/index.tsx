import { Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";

const PaymentInfoSchema = Yup.object({
  bankName: Yup.string(),
  accountBankName: Yup.string(),
  bankNumber: Yup.string(),
});

export default function PaymentInfoForm({ user, editing, onSubmit }: any) {
  return (
    <Formik
      initialValues={{
        bankName: user?.payment?.bankName || "",
        accountBankName: user?.payment?.accountBankName || "",
        bankNumber: user?.payment?.bankNumber || "",
      }}
      validationSchema={PaymentInfoSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form id="paymentForm">
        <Stack spacing={2}>
          <FormikTextField
            name="bankName"
            label="Bank Name"
            fullWidth
            disabled={!editing}
          />
          <FormikTextField
            name="accountBankName"
            label="Account Holder Name"
            fullWidth
            disabled={!editing}
          />
          <FormikTextField
            name="bankNumber"
            label="Bank Number"
            fullWidth
            disabled={!editing}
          />
        </Stack>
      </Form>
    </Formik>
  );
}
