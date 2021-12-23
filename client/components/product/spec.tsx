import React from "react";

interface SpecType {
  title: string;
  value: string;
}

const Spec: React.FC<SpecType> = ({ title, value }) => {
  return (
    <div className="flex flex-row justify-center">
      <p className="text-blue-500">{title}</p>
      <p className="ml-4">{value}</p>
    </div>
  );
};

export default Spec;
