import React from "react";
import Image from "./image";

export interface CardType {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
}

const Card: React.FC<CardType> = ({
  image,
  price,
  title,
  description,
  children,
}) => {
  return (
    <div className=" rounded-md bg-gray-200 md:max-w-lg">
      <div className="h-2/3">{image ? <Image image={image} /> : <></>}</div>
      <div className="text-center">
        <h2 className="font-semibold text-blue-500 text-sm">{title}</h2>
        <p className="text-sm font-semibold">₹{price}</p>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
