import { v4 as uuid } from 'uuid';
import {
  FieldError, FieldValues, useFormContext,
} from 'react-hook-form';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
  dataTestId?: string;
};

export default function Input({
  label, name, placeholder, textarea = false, dataTestId,
}: Props) {
  const id = `input-${name}-${uuid()}`;
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name] as FieldError;

  return (
    <div className="mb-4">
      <label className={`block text-gray-700 text-sm mb-2 ${!!error && 'text-red-500'}`} htmlFor={id}>
        {label}
      </label>
      {
        textarea
          ? (
            <textarea
              id={id}
              data-testid={dataTestId}
              placeholder={placeholder}
              className={`p-2 w-full border border-gray-300 text-sm rounded focus:outline-none ${!!error && 'text-red-500 border-red-500'}`}
              rows={4}
              {...register(name as keyof FieldValues)}
            />
          ) : (
            <input
              id={id}
              data-testid={dataTestId}
              className={`
              appearance-none border rounded h-11 w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline
              ${!!error && 'text-red-500 border-red-500'}
            `}
              type="text"
              placeholder={placeholder}
              {...register(name as keyof FieldValues)}
            />
          )
      }
      {error && <p className="text-red-500 text-sm mt-1" data-testid="error-message">{error.message}</p>}
    </div>
  );
}
