import React from "react";
import dummy from "../../testData/products.json";
import Card from "../ui/cards/card";

const products = dummy.slice(0, 4);

const ShowcaseContainer: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="container p-3 md:p-6 max-w-sm bg-gray-100 rounded-sm">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="font-bold text-xl">{title}</h1>
        <button className="bg-yellow-300 rounded-md p-2 text-sm font-bold">
          show all
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 max-w-md">
        {products.map((product, idx) => (
          <Card key={idx} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseContainer;
