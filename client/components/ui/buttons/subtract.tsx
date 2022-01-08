import React from "react";
import CustomButton from "./customButton";
import { MinusCircleIcon } from "@heroicons/react/outline";

const Subtract: React.FC<{
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ handleClick }) => {
  return (
    <CustomButton handleClick={handleClick}>
      <MinusCircleIcon className="w-3" />
    </CustomButton>
  );
};

export default Subtract;
