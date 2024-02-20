import { v4 as uuid } from "uuid";

type Props = {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
};


export default function Input({ label, textarea, name, placeholder }: Props) {
  const id = `input-${name}-${uuid()}`;

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-2" htmlFor={id}>
        {label}
      </label>
      {
        textarea ?
        (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            className="p-2 w-full border border-gray-300 text-sm rounded focus:outline-none"
            rows={4}
          />
        ) : (
          <input
            id={id}
            name={name}
            className="appearance-none border rounded h-11 w-full py-2 px-3 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder={placeholder}
          />
          )
      }
    </div>
  );
}
