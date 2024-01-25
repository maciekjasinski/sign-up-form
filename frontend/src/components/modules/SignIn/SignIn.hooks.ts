import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues, schema } from "./utils";

export const useSignIn = () => {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const handleSubmit = methods.handleSubmit(async (data) => {
    return await new Promise((resolove) => {
      setTimeout(resolove, 1000);
      console.log(data);
    });
  });

  return {
    methods,
    isSubmitting: methods.formState.isSubmitting,
    handleSubmit,
  };
};
