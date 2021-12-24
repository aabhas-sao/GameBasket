import React from "react";
import dummy from "../../testData/products.json";
import laptops from "../../testData/laptops.json";
import ShowcaseContainer from "./showcaseContainer";

const products = dummy.slice(0, 4);

const ShowcaseCluster = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-3">
      <ShowcaseContainer products={laptops} title="Laptops" />
      <ShowcaseContainer products={products} title="Games" />
      <ShowcaseContainer products={products} title="Controllers" />
      <ShowcaseContainer products={products} title="PC" />
    </div>
  );
};

export default ShowcaseCluster;
