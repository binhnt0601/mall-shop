import { TextField, InputAdornment, Typography } from "@mui/material";
import React from "react";

interface FormikTextFieldProps {
  formik: any;
  name: string;
  label: string;
  type?: string;
  icon?: React.ReactNode;
  [x: string]: any;
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({
  formik,
  name,
  label,
  type = "text",
  icon,
  ...props
}) => {
  const showError = formik.touched[name] && Boolean(formik.errors[name]);

  return (
    <div style={{ width: "100%" }}>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        type={type}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={showError}
        style={{ background: "rgba(255, 252, 252, 0.349)" }}
        className="w-full rounded-md"
        InputLabelProps={{
          style: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%",
            color: "white",
          },
        }}
        InputProps={{
          style: { color: "white" },
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
          {formik.errors[name] as string}
        </Typography>
      )}
    </div>
  );
};

export default FormikTextField;
