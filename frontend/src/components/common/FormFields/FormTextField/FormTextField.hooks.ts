import { FieldError, useFormContext } from "react-hook-form";
import { FormTextFieldPropsHooks } from "./FormTextField.interface";

export const useFormTextField = ({ name }: FormTextFieldPropsHooks) => {
  const { register, formState } = useFormContext();
  const { errors } = formState as { errors: {
    [key: string]: FieldError
  }};

  return {
    register,
    errorMessage: errors[name]?.message
  };
};
