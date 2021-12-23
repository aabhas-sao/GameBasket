import React from "react";

const Spacer = ({ px }: { px: number }) => {
  return <div className={`m-${px}`}></div>;
};

export default Spacer;
