import axios from "axios";
import React, { useState, useEffect } from "react";
import baseUrl from "../constants/routes";
// import { fetchDeals } from "../firebase/products/readProducts";
import Card from "./ui/cards/card";

/**
 * Side wise scrollable product list
 * @return { React.ReactElement }
 */
const SideScroll = (): React.ReactElement => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`${baseUrl}/products`).then((res) => {
      console.log(res.data);
      if (res.data.length !== products.length) {
        setProducts(res.data);
      }
    });
  });

  // useEffect(() => {
  //   fetchDeals("deals", "topDeals").then((res) => {
  //     console.log(res);
  //     if (res.length != products.length) setProducts(res);
  //   });
  // }, [products]);

  return (
    <div className=" w-full lg:w-4/5 mx-auto z-0">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Today&apos;s Deals
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product, idx) => (
            <Card key={idx} image={product.image_link} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideScroll;
