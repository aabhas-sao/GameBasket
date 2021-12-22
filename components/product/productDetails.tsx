import React from "react";
import AddToCart from "../ui/buttons/addToCart";
import Buy from "../ui/buttons/buy";
import Spacer from "../ui/spacer";

interface Props {
  image: string;
  title: string;
  price: number;
  specs?: any;
}

const ProductDetails: React.FC<Props> = ({ image, title, price, specs }) => {
  console.log(specs);
  const product = { id: 1, image, price, specs };
  return (
    <article className="w-10/12 mx-auto card flex flex-col md:flex-row">
      <div className="md:w-2/5">
        <img src={`${image}`} />
      </div>
      <div className="p-2 md:p-8">
        <div className="text-center md:text-left">
          <div className="text-blue-700 text-3xl">{title}</div>
          <div className=" text-xl font-bold mt-1">₹{price}</div>
          <div className="flex flex-row justify-center mt-8">
            <Buy />
            <Spacer px={2} />
            <AddToCart item={product} />
            <div className="ml-4"></div>
          </div>
        </div>
        {/* <div className="mt-6 text-center">
          <p>product specifications</p>
          {specs ? (
            Object.keys(specs).map((key, index) => (
              <Spec key={index} title={key} value={specs[key]} />
            ))
          ) : (
            <></>
          )}
        </div> */}
      </div>
    </article>
  );
};

export default ProductDetails;
