import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetchDeals } from "../firebase/products/readProducts";

/**
 * Side wise scrollable product list
 * @return { React.ReactElement }
 */
const SideScroll = (): React.ReactElement => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchDeals("deals", "topDeals").then((res) => {
      console.log(res);
      if (res.length != products.length) setProducts(res);
    });
  }, [products]);

  return (
    <div className="bg-white w-4/5 mx-auto z-0">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Today&apos;s Deals
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-scale-down lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <Link
                    href={{
                      pathname: "/product",
                      query: {
                        id: product.id,
                      },
                    }}
                  >
                    <h3 className="text-sm text-gray-700">
                      <a className="line-clamp-4 text-blue-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                  </Link>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideScroll;
