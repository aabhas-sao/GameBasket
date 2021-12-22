import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./cartItem";

const CartList = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  console.log(items);
  return (
    <div className="p-4 md:p-12 grid md:grid-cols-4 justify-center justify-items-center gap-6">
      {items.map((item, idx) => (
        <CartItem key={idx} details={item} />
      ))}
    </div>
  );
};

export default CartList;
