import React, { useState } from "react";
import InputField from "../ui/input";

interface Props {
  items: { [index: string]: string };
  setCustomFields: (
    value: React.SetStateAction<{ [index: string]: string }>
  ) => void;
}

const CustomFields: React.FC<Props> = ({ items, setCustomFields }) => {
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCustomFields({ ...items, [key]: value });
  };

  console.log(items);
  return (
    <div>
      {Object.keys(items).map((key, i) => (
        <p key={i}>
          <span>key: {key}</span> <br />
          <span>value: {items[key]}</span>
        </p>
      ))}
      <InputField
        id="field"
        type="name"
        name=""
        autocomplete="none"
        placeholder="none"
        setField={setKey}
      />
      <InputField
        id="value"
        type="name"
        name=""
        autocomplete="none"
        placeholder="none"
        setField={setValue}
      />
      <button onClick={(e) => handleClick(e)}>add</button>
    </div>
  );
};

export default CustomFields;
