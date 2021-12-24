import React from "react";

const Image: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="w-full h-full">
      <img className="w-full h-full object-scale-down" src={image} />
    </div>
  );
};

export default Image;
