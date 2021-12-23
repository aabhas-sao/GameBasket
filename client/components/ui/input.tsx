import React from "react";

interface InputFieldProps {
  id: string;
  type: string;
  name: string;
  autocomplete: string;
  placeholder: string;
  setField: (value: React.SetStateAction<string>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  autocomplete,
  placeholder,
  setField,
}) => {
  return (
    <div>
      <label htmlFor={id} className="ml-2 my-1.5 block text-sm text-gray-900">
        {name}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autocomplete}
        required
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
        onChange={(e) => {
          setField(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
