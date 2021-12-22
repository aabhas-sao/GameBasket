import React from "react";
import Buy from "../ui/buttons/buy";
import Card from "../ui/cards/card";
import { CardType } from "../ui/cards/card";

const CartItem: React.FC<{ details: CardType }> = ({ details }) => {
  return (
    <Card {...details}>
      <Buy />
    </Card>
  );
};

export default CartItem;
