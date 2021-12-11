import React from "react";

interface SelectFieldProps {
  id: string;
  title: string;
  options: string[];
  name: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  title,
  options,
  name,
}) => {
  return (
    <>
      <label htmlFor={id}> {title} </label>
      <select name={name} id={id}>
        {options.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectField;
