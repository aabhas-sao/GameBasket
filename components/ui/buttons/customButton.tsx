import React from "react";

interface ButtonProps {
  title?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  handleClick,
  children,
}) => {
  return (
    <button
      onClick={(e) => {
        handleClick(e);
      }}
      className="rounded-md flex text-xs flex-row bg-yellow-300 p-1 md:p-2"
    >
      {children}
      {title ? (
        <a href="@" className="ml-1 md:ml-1.5 font-bold text-gray-700">
          {title}
        </a>
      ) : (
        <></>
      )}
    </button>
  );
};

export default CustomButton;
