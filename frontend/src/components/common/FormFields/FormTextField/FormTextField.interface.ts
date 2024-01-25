import { HTMLInputTypeAttribute } from "react";

export interface FormTextFieldProps {
  label?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
}

export interface FormTextFieldPropsHooks {
  name: string;
}
