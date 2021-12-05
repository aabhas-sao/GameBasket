import React from "react";
import CustomButton from "./customButton";

interface Props {
  image: string;
  title: string;
}

const ProductDetails: React.FC<Props> = ({ image, title }) => {
  return (
    <article className="w-10/12 mx-auto card flex flex-row">
      <div className="w-1/2 bg-yellow-100">
        <img src={`${image}`} />
      </div>
      <div className="w-1/2 bg-red-200 p-2 md:p-8">
        <div>
          <div className="">{title}</div>
          <div>ratings</div>
          <div>price</div>
          <div className="flex md:w-2/5 justify-between flex-col md:flex-row">
            <CustomButton title="Buy Now" />
            <CustomButton title="Add to Cart" />
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
