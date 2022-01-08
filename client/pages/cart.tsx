import React from "react";
import CartList from "../components/cart/cartList";
import Price from "../components/cart/price";

const Cart: React.FC = () => (
  <div className="flex flex-col md:flex-row container">
    <CartList />
    <Price />
  </div>
);

export default Cart;
