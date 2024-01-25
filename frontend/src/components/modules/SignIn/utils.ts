import { z } from "zod";

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(10),
});

export type FormFields = z.infer<typeof schema>;

export const defaultValues = {
  email: "",
  password: "",
};
