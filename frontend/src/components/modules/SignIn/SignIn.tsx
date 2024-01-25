import { FormProvider } from "react-hook-form"
import { useSignIn } from "./SignIn.hooks"
import { FormTextField } from "../../common/FormFields/FormTextField";

export const SignIn = () => {
  const { handleSubmit, isSubmitting, methods } = useSignIn();
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-8">
          <span className="text-2xl font-bold text-center">Sign In</span>
          <div className="flex flex-col gap-4">
            <FormTextField label="Email" placeholder="Enter your email" name="email" />
            <FormTextField label="Password" placeholder="Enter your password" type="password" name="password" />
            <button className="btn">
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              Login
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}
