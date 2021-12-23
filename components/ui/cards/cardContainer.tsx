import React from "react";

const CardContainer: React.FC = ({ children }) => {
  return <div className="rounded-lg p-1 w-full bg-gray-100">{children}</div>;
};

export default CardContainer;
