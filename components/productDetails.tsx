import React from "react";
import CustomButton from "./ui/customButton";

interface Props {
  image: string;
  title: string;
  price: number;
}

const ProductDetails: React.FC<Props> = ({ image, title, price }) => {
  return (
    <article className="w-10/12 mx-auto card flex flex-row">
      <div className="w-1/2">
        <img src={`${image}`} />
      </div>
      <div className="w-1/2 p-2 md:p-8">
        <div>
          <div className="text-blue-700">{title}</div>
          {/* <div>ratings</div> */}
          <div>{price}</div>
          <div className="flex md:w-2/5 justify-between flex-col md:flex-row">
            <CustomButton handleClick={() => {}} title="Buy Now" />
            <CustomButton handleClick={() => {}} title="Add to Cart" />
          </div>
        </div>
        <div>
          <p>product specifications</p>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
