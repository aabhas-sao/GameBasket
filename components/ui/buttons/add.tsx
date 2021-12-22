import React from "react";
import CustomButton from "./customButton";
import { PlusCircleIcon } from "@heroicons/react/outline";

const Add: React.FC<{
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ handleClick }) => {
  return (
    <CustomButton handleClick={handleClick}>
      <PlusCircleIcon className="w-3" />
    </CustomButton>
  );
};

export default Add;
