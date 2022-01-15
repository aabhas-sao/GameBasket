import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import baseUrl from "../../constants/routes";
import {
  decrement,
  increment,
  removeItem,
} from "../../redux/features/cart/cartSlice";
import { RootState } from "../../redux/store";
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
  const user = useSelector((state: RootState) => state.user);

  const handleIncrement = async () => {
    try {
      await axios.patch(
        `${baseUrl}/cart/increment`,
        {
          userId: user.uid,
          productId: details.id,
        },
        { withCredentials: true }
      );
    } catch (e) {
      console.log(e);
      return;
    }
    dispatch(increment({ id: details.id }));
  };
  const handleDecrement = () => {
    try {
      axios.patch(
        `${baseUrl}/cart/decrement`,
        {
          userId: user.uid,
          productId: details.id,
        },
        { withCredentials: true }
      );
    } catch (e) {
      console.log(e);
      return;
    }
    dispatch(decrement({ id: details.id }));
  };

  return (
    <CardCompact {...details}>
      <div className="flex flex-col">
        <div className="flex flex-row items-center max-w-48">
          <Subtract handleClick={handleDecrement} />
          <div className="mx-2">
            <p className="text-sm font-semibold">{count}</p>
          </div>
          <Add handleClick={handleIncrement} />
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
