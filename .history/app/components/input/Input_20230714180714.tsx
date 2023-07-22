'use client';

/**
 * Input Component
 *
 * A reusable input component for form fields.
 *
 * Props:
 * - id: The unique ID of the input field.
 * - label: The label for the input field.
 * - type: The type of the input field. (Default: "text")
 * - disabled: Whether the input field is disabled or not.
 * - formatPrice: Whether the input field should format the value as a price. (Default: false)
 * - required: Whether the input field is required or not.
 * - register: The register function from the react-hook-form library.
 * - errors: The validation errors object from react-hook-form.
 *
 * Usage:
 * ```tsx
 * <Input
 *   id="email"
 *   label="Email"
 *   type="text"
 *   disabled={false}
 *   formatPrice={false}
 *   required={true}
 *   register={register}
 *   errors={errors}
 * />
 * ```
 */

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className='w-full relative'>
      {formatPrice && (
        <BiDollar
          size={24}
          className='text-neutral-700 absolute top-5 left-2'
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=' '
        type={type}
        className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          formatPrice ? 'pl-9' : 'pl-4'
        } ${errors[id] ? 'border-rose-500' : 'border-neutral-700'} ${
          errors[id] ? 'focus:border-rose-500' : 'focus:border-black'
        }`}
      />
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] ${
          formatPrice ? 'left-9' : 'left-4'
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors[id] ? 'text-rose-500' : 'text-zinc-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
