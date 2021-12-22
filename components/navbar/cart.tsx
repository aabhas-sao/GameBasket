import React from "react";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Cart = () => {
  const { count } = useSelector((state: RootState) => state.cart);
  return (
    <div className="ml-4 flow-root lg:ml-6">
      <Link href="/cart">
        <a className="group -m-2 p-2 flex items-center">
          <ShoppingBagIcon
            className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {count}
          </span>
          <span className="sr-only">items in cart, view bag</span>
        </a>
      </Link>
    </div>
  );
};

export default Cart;
