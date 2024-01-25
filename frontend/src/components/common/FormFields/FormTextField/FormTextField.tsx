import { useFormTextField } from "./FormTextField.hooks";
import { FormTextFieldProps } from "./FormTextField.interface";

export const FormTextField = ({
  label,
  placeholder,
  type = 'text',
  name,
}: FormTextFieldProps) => {
  const { register, errorMessage } = useFormTextField({ name });
  return (
    <label className="flex flex-col">
      {label && (
        <span className="text-sm text-gray-500 font-bold mb-1">{label}</span>
      )}
      <input
        className={`input input-ghost input-bordered ${errorMessage && 'input-error'}`}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      {errorMessage && (
        <span className="text-sm text-red-500 mt-1">{errorMessage}</span>
      )}
    </label>
  )
}
