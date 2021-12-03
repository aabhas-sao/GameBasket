import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomButton from "../../components/customButton";

const data = [
  {
    name: "Pixel 6 Pro",
    price: "$400",
    id: 1,
    src: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "electronics",
    subcategory: "mobiles",
  },
  {
    name: "Pixel 6 Pro",
    price: "$400",
    id: 2,
    src: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "electronics",
    subcategory: "mobiles",
  },
  {
    name: "Pixel 6 Pro",
    price: "$400",
    id: 3,
    src: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "electronics",
    subcategory: "mobiles",
  },
  {
    name: "Pixel 6 Pro",
    price: "$400",
    id: 4,
    src: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    category: "electronics",
    subcategory: "mobiles",
  },
];

const ProductList = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="container">
      <h1 className="text-center gray-700 text-xl my-4 md:my-8 md:text-2xl font-bold">
        Showing results for {pid}
      </h1>
      <div className="divide-y divide-gray-300">
        {data.map((product) => (
          <article
            className="flex p-2 md:p-4 md:w-2/3 mx-auto justify-evenly"
            key={product.id}
          >
            <div className="flex flex-row">
              <img className="h-16 md:h-32 " src={`${product.src}`} />
              <div className="flex text-sm flex-col ml-4 md:ml-8 flex-2">
                <div className="text-blue-700">
                  <Link
                    href={{
                      pathname: "/product",
                      query: { id: product.id },
                    }}
                  >
                    <a>{product.name}</a>
                  </Link>
                </div>
                <div>{product.category}</div>
                <div>{product.subcategory}</div>
              </div>
            </div>
            <div className="flex flex-col justify-around">
              <div className="text-2xl font-bold">{product.price}</div>
              <CustomButton title="add to cart" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
