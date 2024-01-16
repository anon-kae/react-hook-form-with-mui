import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "../../interfaces/FormInputProps";
import { validationMessage } from '../../helpers/ValidationMessage'

export const FormInputText = ({ name, control, label, rules }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field,
        fieldState: { error }
      }) => (
        <TextField
          helperText={error ? validationMessage[name][error.type] : ''}
          error={!!error}
          size="small"
          {...field}
          fullWidth
          label={label}
          variant="outlined"
        />
      )}
    />
  );
};