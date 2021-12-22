import React from "react";
import CustomButton from "./customButton";
import { MinusCircleIcon } from "@heroicons/react/outline";

const Subtract = () => {
  return (
    <CustomButton handleClick={() => {}}>
      <MinusCircleIcon className="w-3" />
    </CustomButton>
  );
};

export default Subtract;
