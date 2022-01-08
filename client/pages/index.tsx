import React from "react";
import CarouselContainer from "../components/carousel/carouselContainer";
import ShowcaseCluster from "../components/showcase/showcaseCluster";
// import Banner6 from "../components/banner";
// import BuildPc from "../components/buildpc/buildPc";
import SideScroll from "../components/sideScroll";

const Index: React.FunctionComponent = () => {
  return (
    <div className="bg-gray-200">
      {/* <Banner6 /> */}
      {/* <BuildPc /> */}
      <SideScroll />
      <CarouselContainer />
      <ShowcaseCluster />
    </div>
  );
};
export default Index;
