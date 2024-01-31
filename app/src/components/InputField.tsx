import React from "react";
import TextField from "@mui/material/TextField";

import {InputProps} from "../interfaces/Input";

const InputField: React.FC<InputProps> = ({
  id,
  name,
  label,
  size,
  multiline = false,
  value,
  onChange,
  onBlur,
  fullWidth = true,
}) => {
  return (
    <TextField
      id={id}
      name={name}
      fullWidth={fullWidth}
      label={label}
      size={size}
      multiline={multiline}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default InputField;
