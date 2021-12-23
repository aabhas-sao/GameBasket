import { TrashIcon } from "@heroicons/react/outline";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import Add from "../ui/buttons/add";
import CustomButton from "../ui/buttons/customButton";
import Subtract from "../ui/buttons/subtract";
import CardCompact from "../ui/cards/cardCompact";
import Spacer from "../ui/spacer";

const CartItem: React.FC<{ details: any; count: number }> = ({
  details,
  count,
}) => {
  const dispatch = useDispatch();
  return (
    <CardCompact {...details}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center max-w-48">
          <Subtract
            handleClick={() => {
              dispatch(decrement({ id: details.id }));
            }}
          />
          <div className="mx-2">
            <p className="text-sm font-semibold">{count}</p>
          </div>
          <Add
            handleClick={() => {
              dispatch(increment({ id: details.id }));
            }}
          />
        </div>
        <Spacer px={2} />
        <CustomButton
          bgColor="bg-red-600"
          title="Delete"
          color="text-white"
          handleClick={() => {
            dispatch(removeItem({ id: details.id }));
          }}
        />
      </div>
    </CardCompact>
  );
};

export default CartItem;
