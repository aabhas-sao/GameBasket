import React from "react";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  imageAlt,
  title,
  price,
}) => {
  return (
    <div key={id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-scale-down lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex flex-col justify-between">
        <div>
          <Link
            href={{
              pathname: "/product",
              query: {
                id: id,
              },
            }}
          >
            <h3 className="text-sm text-gray-700">
              <a className="line-clamp-4 text-blue-700">
                <span aria-hidden="true" className="absolute inset-0" />
                {title}
              </a>
            </h3>
          </Link>
        </div>
        <p className="text-sm font-medium text-gray-900">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
