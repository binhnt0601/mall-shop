import { t } from "@lingui/macro";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Stack, InputAdornment, IconButton } from "@mui/material";
import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";

import FormikTextField from "@/components-shared/FormikTextField";

const PasswordSchema = Yup.object({
  currentPassword: Yup.string().required(t`Enter current password`),
  newPassword: Yup.string()
    .min(6, t`Min 6 chars`)
    .required(t`Enter new password`),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], t`Passwords must match`)
    .required(t`Confirm your password`),
});

export default function PasswordForm({ editing, onSubmit }: any) {
  const [show, setShow] = React.useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleToggle = (key: "current" | "new" | "confirm") => {
    setShow((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
          {editing && (
            <>
              <FormikTextField
                name="currentPassword"
                label={t`Current Password`}
                type={show.current ? "text" : "password"}
                fullWidth
                icon={
                  <IconButton
                    onClick={() => handleToggle("current")}
                    edge="end"
                    tabIndex={-1}
                    size="small"
                  >
                    {show.current ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleToggle("current")}
                        edge="end"
                        tabIndex={-1}
                        size="small"
                      >
                        {show.current ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormikTextField
                name="newPassword"
                label={t`New Password`}
                type={show.new ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleToggle("new")}
                        edge="end"
                        tabIndex={-1}
                        size="small"
                      >
                        {show.new ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormikTextField
                name="confirmPassword"
                label={t`Confirm Password`}
                type={show.confirm ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleToggle("confirm")}
                        edge="end"
                        tabIndex={-1}
                        size="small"
                      >
                        {show.confirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </>
          )}
        </Stack>
      </Form>
    </Formik>
  );
}
