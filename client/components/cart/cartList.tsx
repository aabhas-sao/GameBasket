import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CartItem from "./cartItem";

const CartList = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  console.log(items);

  return (
    <div className=" md:p-12 grid w-full gap-2">
      {items.map((item: any, idx: number) => (
        <CartItem key={idx} count={item.count} details={item.product} />
      ))}
    </div>
  );
};

export default CartList;
