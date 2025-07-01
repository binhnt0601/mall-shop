import React from 'react';

import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';

export default function FormInput(props) {
  const {
    name,
    label,
    control,
    rules = { required: false },
    placeholder,
    errors = {},
    errorText = '',
    component: Component,
    defaultCountry = 'VN',
    multiline = false,
    rows = 1,
  } = props;

  const hasError = !!errors[name]?.type;

  return (
    <FormControl variant="standard">
      <Typography
        variant="body1"
        sx={{
          lineHeight: '30px',
          letterSpacing: '-1.1%',
        }}
      >
        {label} {rules.required && <span className="text-red-600">*</span>}
      </Typography>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Component
            {...field}
            id={name}
            defaultCountry={defaultCountry}
            placeholder={placeholder}
            multiline={multiline}
            rows={rows}
          />
        )}
      />
      {hasError && (
        <FormHelperText sx={{ position: 'absolute', bottom: '-20px' }} error>
          {errorText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string || PropTypes.node,
  control: PropTypes.object.isRequired,
  rules: PropTypes.object,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
  errorText: PropTypes.string,
  component: PropTypes.elementType.isRequired,
  defaultCountry: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};
