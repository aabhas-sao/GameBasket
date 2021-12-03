import React from "react";
import { useRouter } from "next/router";

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
      <h1 className="text-center">{pid}</h1>
      <div className="divide-y divide-gray-300">
        {data.map((product) => (
          <article
            className="flex p-2 md:p-4 md:w-2/3 mx-auto "
            key={product.id}
          >
            <div>
              <img className="h-16 md:h-32 " src={`${product.src}`} />
            </div>
            <div className="flex flex-col ml-4 md:ml-8 flex-2">
              <div>{product.name}</div>
              <div>{product.price}</div>
              <div>{product.category}</div>
              <div>{product.subcategory}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
