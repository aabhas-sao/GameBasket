import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import CustomButton from "./customButton";

const AddToCart = () => {
  return (
    <CustomButton title="Add to Cart" handleClick={() => {}}>
      <ShoppingCartIcon className="w-4" />
    </CustomButton>
  );
};

export default AddToCart;
