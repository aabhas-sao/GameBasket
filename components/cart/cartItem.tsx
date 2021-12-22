import React from "react";
import Add from "../ui/buttons/add";
import Subtract from "../ui/buttons/subtract";
import CardCompact from "../ui/cards/cardCompact";

const CartItem: React.FC<{ details: any }> = ({ details }) => {
  return (
    <CardCompact {...details}>
      <div className="flex flex-row items-center max-w-48">
        <Subtract />
        <div className="mx-2">
          <p className="text-sm font-semibold">0</p>
        </div>
        <Add />
      </div>
    </CardCompact>
  );
};

export default CartItem;
