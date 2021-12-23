import React from "react";
import Link from "next/link";
import CustomButton from "../ui/buttons/customButton";
import Spacer from "../ui/spacer";

interface ProductListProps {
  subcategory: string;
  products: any[];
}

const ProductList: React.FC<ProductListProps> = ({ subcategory, products }) => {
  return (
    <div className="container filler">
      <h1 className="text-center gray-700 text-xl my-4 md:my-8 md:text-2xl font-bold">
        Showing results for {subcategory}
      </h1>
      <div className="divide-y divide-gray-300">
        {products.map((product) => (
          <article
            className="flex mt-3 pt-4 flex-col md:flex-row p-2 md:p-4 md:w-4/5 mx-auto justify-evenly"
            key={product.id}
          >
            <div className="flex md:w-2/3 flex-row">
              <img className="w-20 md:w-32 " src={`${product.image}`} />
              <div className="w-2/3  flex text-sm flex-col ml-4 md:ml-8 flex-2">
                <div className="text-xs my-auto ">
                  <Link
                    href={{
                      pathname: "/product",
                      query: {
                        id: product.id,
                      },
                    }}
                  >
                    <a className="text-blue-700">
                      <p className="line-clamp-2">{product.title}</p>
                    </a>
                  </Link>
                  <p className="md:hidden mt-1 text-sm font-medium">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-center">
              <div className="text-lg md:text-2xl font-bold">
                ₹{product.price}
              </div>
              <Spacer px={1} />
              <CustomButton handleClick={() => {}} title="add to cart" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
