import { FormProvider } from "react-hook-form"
import { useSignUp } from "./SignUp.hooks"
import { FormTextField } from "../../common/FormFields/FormTextField";

export const SignUp = () => {
  const { handleSubmit, isSubmitting, methods } = useSignUp();
  return (
    <div className="order-last">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-8">
          <span className="text-2xl font-bold text-center">Sign Up</span>
          <div className="flex flex-col gap-4">
            <FormTextField label="Email" placeholder="Enter your email" name="email" />
            <FormTextField label="Password" placeholder="Enter your password" type="password" name="password" />
            <FormTextField 
              label="Confirm password"
              placeholder="Enter your password" 
              type="password" 
              name="confirmPassword"
            />
            <button className="btn">
              {isSubmitting && (
                <span className="loading loading-spinner"></span>
              )}
              SignUp
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
