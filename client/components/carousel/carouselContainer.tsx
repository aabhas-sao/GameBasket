import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";

const CarouselContainer = () => {
  const ARROW_SIZE = "w-4";
  return (
    <div className="container flex flex-row justify-between p-2">
      <div>
        <button>
          <ArrowLeftIcon className={ARROW_SIZE} />
        </button>
      </div>
      <div className="w-4/5"></div>
      <div>
        <button>
          <ArrowRightIcon className={ARROW_SIZE} />
        </button>
      </div>
    </div>
  );
};

export default CarouselContainer;
