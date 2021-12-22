import React from "react";

interface ButtonProps {
  title?: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: string;
  bgColor?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  handleClick,
  children,
  color,
  bgColor,
}) => {
  return (
    <button
      onClick={(e) => {
        handleClick(e);
      }}
      className={
        bgColor
          ? `rounded-md flex justify-center text-xs flex-ro p-1 md:p-2 ${bgColor} ${color}`
          : "rounded-md flex text-xs flex-ro p-1 md:p-2 bg-yellow-300"
      }
    >
      {children}
      {title ? (
        <a
          href="@"
          className={
            color
              ? `ml-1 md:ml-1.5 font-bold ${color}`
              : "ml-1 md:ml-1.5 font-bold text-gray-700"
          }
        >
          {title}
        </a>
      ) : (
        <></>
      )}
    </button>
  );
};

export default CustomButton;
