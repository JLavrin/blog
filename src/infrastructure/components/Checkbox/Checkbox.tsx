import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string
  label: ReactNode
  dataTestId?: string
}

export default function Checkbox({ name, label, dataTestId }: Props) {
  const { register, formState: { errors } } = useFormContext()
  const error = errors[name]

  return (
    <div className="flex items-center">
      <input
        data-testid={dataTestId}
        type="checkbox"
        id={name}
        className={`h-4 w-4 text-blue-500 focus:outline-none appearance-none border border-gray-400 rounded checked:appearance-auto ${error && 'border-red-500'}`}
        {...register(name)}
      />
      <label htmlFor={name} className="ml-2 text-gray-700 text-base">
        {label}
      </label>
      {error && <p className="text-red-500 text-sm mt-1" data-testid="error-message" />}
    </div>
  )
}
