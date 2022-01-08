import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import CustomButton from "./customButton";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/features/cart/cartSlice";

const AddToCart: React.FC<{ item: any }> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <CustomButton
      title="Add to Cart"
      handleClick={() => {
        dispatch(addItem({ item: item }));
      }}
    >
      <ShoppingCartIcon className="w-4" />
    </CustomButton>
  );
};

export default AddToCart;
