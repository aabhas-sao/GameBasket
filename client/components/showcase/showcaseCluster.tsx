import React from "react";
import ShowcaseContainer from "./showcaseContainer";

const ShowcaseCluster = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-3">
      <ShowcaseContainer title="Laptops" />
      <ShowcaseContainer title="Laptops" />
      <ShowcaseContainer title="Laptops" />
      <ShowcaseContainer title="Laptops" />
    </div>
  );
};

export default ShowcaseCluster;
