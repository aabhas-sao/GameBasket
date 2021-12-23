import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";

const CarouselContainer = () => {
  return (
    <div className="container flex flex-row justify-between">
      <div>
        <button>
          <ArrowLeftIcon />
        </button>
      </div>
      <div className="w-4/5"></div>
      <div>
        <button>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default CarouselContainer;
