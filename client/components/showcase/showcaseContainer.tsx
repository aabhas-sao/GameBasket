import React from "react";
import dummy from "../../testData/products.json";
import Card from "../ui/cards/card";

const products = dummy.slice(0, 4);

const ShowcaseContainer = () => {
  return (
    <div className="container p-1">
      <div>
        <button className="bg-yellow-300 rounded-md p-1">show all</button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 max-w-md">
        {products.map((product, idx) => (
          <Card key={idx} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseContainer;
