import React from "react";
import CarouselContainer from "../components/carousel/carouselContainer";
import ShowcaseContainer from "../components/showcase/showcaseContainer";
// import Banner6 from "../components/banner";
// import BuildPc from "../components/buildpc/buildPc";
import SideScroll from "../components/sideScroll";

const Index: React.FunctionComponent = () => {
  return (
    <div>
      {/* <Banner6 /> */}
      {/* <BuildPc /> */}
      <SideScroll />
      <CarouselContainer />
      <ShowcaseContainer />
    </div>
  );
};
export default Index;
