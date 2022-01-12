import React from "react";

export interface CardType {
  id?: number;
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  imgSize?: string;
}

const CardLoading: React.FC<CardType> = ({
  id,
  image,
  imgSize,
  price,
  title,
  description,
  children,
}) => {
  return (
    <div className=" rounded-md bg-white md:max-w-lg animate-pulse">
      <div className={imgSize ? imgSize : "h-2/3"}>
        <div className="bg-gray-700 w-full h-full" />
      </div>
      <div className="text-left pl-3 mt-2">
        <div className="bg-gray-500 w-100 h-3" />

        <div className="bg-gray-300 w-100 h-3 mt-2" />
        <div className="bg-gray-300 w-100 h-3 mt-1" />
      </div>
      {children}
    </div>
  );
};

export default CardLoading;
