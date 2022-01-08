import React from "react";
import Image from "./image";
import { CardType } from "./card";
import CardContainer from "./cardContainer";

const CardCompact: React.FC<CardType> = ({
  image,
  title,
  description,
  price,
  children,
}) => {
  return (
    <CardContainer>
      <div className="flex flex-row min-w-full p-1 items-center justify-between overflow-hidden w-100">
        {image ? (
          <div className="w-24">
            {" "}
            <Image image={image} />{" "}
          </div>
        ) : (
          <></>
        )}
        <div className=" flex flex-col p-2 w-1/2">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="font-bold text-xs">₹{price}</p>
        </div>
        {children}
      </div>
    </CardContainer>
  );
};

export default CardCompact;
