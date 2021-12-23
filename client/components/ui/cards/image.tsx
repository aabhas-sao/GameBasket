import React from "react";

const Image: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="w-100">
      <img className="w-100" src={image} />
    </div>
  );
};

export default Image;
