import React from "react";
import CardLoading from "../components/ui/cards/cardLoading";

const Hello: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <CardLoading imgSize="h-64" />
    </div>
  );
};

export default Hello;
