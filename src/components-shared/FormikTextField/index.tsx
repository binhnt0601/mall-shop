import { TextField, InputAdornment, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";
interface FormikTextFieldProps {
  name: string;
  label: string;
  type?: string;
  icon?: React.ReactNode;
  [x: string]: any;
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  name,
  label,
  type = "text",
  icon,
  ...props
}) => {
  const formik = useFormikContext<any>();
  const showError = formik?.touched[name] && Boolean(formik?.errors[name]);

  return (
    <div style={{ width: "100%" }}>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        type={type}
        value={formik?.values[name]}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={showError}
        style={{ background: "rgba(255, 252, 252, 0.349)" }}
        className="w-full rounded-md"
        InputLabelProps={{
          style: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
          },
        }}
        InputProps={{
          endAdornment: icon ? (
            <InputAdornment position="end">{icon}</InputAdornment>
          ) : undefined,
        }}
        {...props}
      />
      {showError && (
        <Typography
          color="error"
          variant="caption"
          style={{ marginLeft: "10px" }}
        >
          {formik?.errors[name] as string}
        </Typography>
      )}
    </div>
  );
};

export default FormikTextField;
