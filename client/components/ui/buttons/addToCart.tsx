import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import CustomButton from "./customButton";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../redux/features/cart/cartSlice";
import axios from "axios";
import baseUrl from "../../../constants/routes";
import { RootState } from "../../../redux/store";

const AddToCart: React.FC<{ item: any }> = ({ item }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleClick = async () => {
    try {
      console.log(user.uid);
      console.log(item.id);
      await axios.post(
        `${baseUrl}/cart/add`,
        {
          userId: user.uid,
          productId: item.id,
        },
        {
          withCredentials: true,
        }
      );
    } catch {
      return;
    }

    dispatch(addItem({ item: item }));
  };

  return (
    <CustomButton title="Add to Cart" handleClick={handleClick}>
      <ShoppingCartIcon className="w-4" />
    </CustomButton>
  );
};

export default AddToCart;
