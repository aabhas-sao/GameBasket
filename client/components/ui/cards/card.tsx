import React from "react";
import Image from "./image";

export interface CardType {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
}

const Card: React.FC<CardType> = ({ image, title, description, children }) => {
  return (
    <div className=" bg-gray-400 md:max-w-lg">
      {image ? <Image image={image} /> : <></>}
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Card;
