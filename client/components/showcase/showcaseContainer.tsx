import React from "react";
import Link from "next/link";
import Card from "../ui/cards/card";

const ShowcaseContainer: React.FC<{ title: string; products: any[] }> = ({
  title,
  products,
}) => {
  return (
    <div className="container p-3 md:p-6 max-w-sm bg-gray-100 rounded-sm">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="font-bold text-xl">{title}</h1>
        <Link href={`products/${title.toLowerCase()}`}>
          <span className="bg-yellow-300 rounded-md p-2 text-sm font-bold cursor-pointer">
            show all
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 align-middle gap-2 max-w-md">
        {products.map((product, idx) => (
          <Card
            imgSize="h-32 lg:h-48"
            key={idx}
            image={product.image_link}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseContainer;
