import { StarIcon } from "@heroicons/react/outline";
import React from "react";

const Rating: React.FC<{ rating: Number }> = ({ rating }) => {
  return (
    <div className="flex flex-row">
      <StarIcon className="w-3 text-yellow-400 fill-current" />
      <StarIcon className="w-3 text-yellow-400 fill-current" />
      <StarIcon className="w-3 text-yellow-400 fill-current" />
      <StarIcon className="w-3 text-yellow-400 fill-current" />
      <StarIcon className="w-3 text-yellow-400 fill-current" />
      <p className="text-xs ml-1 text-gray-700">(320 reviews)</p>
    </div>
  );
};

export default Rating;
