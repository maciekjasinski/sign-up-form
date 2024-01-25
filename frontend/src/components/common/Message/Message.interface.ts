import { ButtonHTMLAttributes } from "react";

export interface MessageProps {
  title: string;
  description: string;
  button: ButtonHTMLAttributes<HTMLButtonElement>;
}
