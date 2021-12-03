import { ShoppingCartIcon, XIcon } from "@heroicons/react/outline";
import React from "react";

interface ButtonProps {
  title: string;
}

const CustomButton: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="rounded-md flex text-xs md:text-sm flex-row bg-yellow-300 p-2">
      <ShoppingCartIcon className="w-4 md:w-6" />
      <a href="@" className="ml-1 md:ml-1.5 font-semibold text-gray-700">
        {title}
      </a>
    </button>
  );
};

export default CustomButton;
