import React from "react";
import Link from "next/link";
import Image from "./image";
import Rating from "../../rating";

export interface CardType {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
  price?: number;
}

const Card: React.FC<CardType> = ({
  id,
  image,
  price,
  title,
  description,
  children,
}) => {
  return (
    <div className=" rounded-md bg-white md:max-w-lg h-64">
      <div className="h-2/3">{image ? <Image image={image} /> : <></>}</div>
      <div className="text-left pl-3">
        {id ? (
          <Link href={`/products/${id}`}>
            <h2 className="font-semibold text-blue-500 text-sm cursor-pointer">
              {title}
            </h2>
          </Link>
        ) : (
          <h2 className="font-semibold text-blue-500 text-sm">{title}</h2>
        )}

        <Rating rating={3} />

        <p className="text-sm font-bold text-gray-700">₹{price}</p>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Card;
