import React from "react";
import CustomButton from "./customButton";
import { CashIcon } from "@heroicons/react/outline";

const Buy = () => {
  return (
    <CustomButton title="Buy Now" handleClick={() => {}}>
      <CashIcon className="w-4" />
    </CustomButton>
  );
};

export default Buy;
