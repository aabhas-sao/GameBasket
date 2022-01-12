import React from "react";
import ShowcaseCluster from "../components/showcase/showcaseCluster";
// import Banner6 from "../components/banner";
// import BuildPc from "../components/buildpc/buildPc";
import SideScroll from "../components/sideScroll";

const Index: React.FunctionComponent = () => {
  return (
    <div className="bg-gray-200 min-h-full">
      <SideScroll />
      {/* <CarouselContainer /> */}
      <ShowcaseCluster />
    </div>
  );
};
export default Index;
