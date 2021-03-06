import React from "react";
import Link from "next/link";
import Rating from "../rating";
import AddToCart from "../ui/buttons/addToCart";

interface ProductListProps {
  subcategory: string;
  products: any[];
}

const ProductList: React.FC<ProductListProps> = ({ subcategory, products }) => {
  return (
    <div className="container filler mx-auto">
      {/* <h1 className="text-center gray-700 text-xl my-4 md:my-8 md:text-2xl font-bold">
        Showing results for {subcategory}
      </h1> */}
      <div className="divide-y divide-gray-300 ">
        {products.map((product) => (
          <article
            className="flex mt-3 pt-4 flex-col md:flex-row p-2 md:p-4 md:w-4/5 mx-auto justify-evenly"
            key={product.id}
          >
            <div className="flex md:w-2/3 flex-row">
              <img className="w-20 md:w-32 " src={`${product.image_link}`} />
              <div className="w-2/3  flex text-sm flex-col ml-4 md:ml-8 flex-2">
                <div className="h-full text-xs flex flex-col justify-center">
                  <Link
                    href={{
                      pathname: "/product",
                      query: {
                        id: product.id,
                      },
                    }}
                  >
                    <a className="text-blue-700 mb-2">
                      <p className="line-clamp-2">{product.title}</p>
                    </a>
                  </Link>
                  <Rating rating={3} />
                  <p className="md:hidden mt-1 text-sm font-medium">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center">
              <div className="text-md md:text-lg text-gray-700 text-center font-bold mb-2">
                ₹{product.price}
              </div>
              <AddToCart item={product} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
