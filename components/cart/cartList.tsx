import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./cartItem";

const CartList = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  console.log(items);
  return (
    <div className=" md:p-12 grid w-full gap-2">
      {items.map((item, idx) => (
        <CartItem key={idx} details={item} />
      ))}
    </div>
  );
};

export default CartList;
