import { z } from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type FormFields = z.infer<typeof schema>;

export const defaultValues = {
  email: "",
  password: "",
  confirmPassword: "",
};
