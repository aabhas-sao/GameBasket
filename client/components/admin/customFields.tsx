import React, { useState } from "react";
import CustomButton from "../ui/buttons/customButton";
import InputField from "../ui/input";
import Spacer from "../ui/spacer";

interface Props {
  items: { [index: string]: string };
  setCustomFields: (
    value: React.SetStateAction<{ [index: string]: string }>
  ) => void;
}

const Item: React.FC<{ title: string; bg: string }> = ({ title, bg }) => {
  return (
    <span className={`border-dashed py-1 px-2 border-2 border-gray-500 ${bg}`}>
      {title}
    </span>
  );
};

const CustomFields: React.FC<Props> = ({ items, setCustomFields }) => {
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCustomFields({ ...items, [key]: value });
  };

  console.log(items);
  const vs = 2;
  return (
    <div>
      <h3 className="font-semibold">Specifications</h3>
      {Object.keys(items).map((key, i) => (
        <p className="my-4" key={i}>
          <Item title={key} bg="bg-red-400" />
          <span className="ml-3"></span>
          <Item title={items[key]} bg="bg-green-400" />
        </p>
      ))}
      <InputField
        id="field"
        type="name"
        name="field"
        autocomplete="none"
        placeholder="none"
        setField={setKey}
      />
      <Spacer px={vs} />
      <InputField
        id="value"
        type="name"
        name="value"
        autocomplete="none"
        placeholder="none"
        setField={setValue}
      />

      <Spacer px={4} />
      <CustomButton handleClick={handleClick} title={"add"} />
    </div>
  );
};

export default CustomFields;
