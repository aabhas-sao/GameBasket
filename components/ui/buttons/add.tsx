import React from "react";
import CustomButton from "./customButton";
import { PlusCircleIcon } from "@heroicons/react/outline";

const Add = () => {
  return (
    <CustomButton handleClick={() => {}}>
      <PlusCircleIcon className="w-3" />
    </CustomButton>
  );
};

export default Add;
