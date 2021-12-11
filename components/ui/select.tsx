import React from "react";

interface SelectFieldProps {
  id: string;
  labelTitle: string;
  options: string[];
  name: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  id,
  labelTitle,
  options,
  name,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}> {labelTitle} </label>
      <select name={name} id={id}>
        {options.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
