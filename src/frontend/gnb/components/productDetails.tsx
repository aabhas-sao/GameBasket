import React from "react";

const ProductDetails = () => {
  return (
    <article className="w-10/12 mx-auto card flex flex-row">
      <div className="w-1/2 bg-yellow-100">
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461723_sd.jpg;maxHeight=640;maxWidth=550"></img>
      </div>
      <div className="w-1/2 bg-red-200 p-8">
        <div>
          <div className="">Dell 144hz</div>
          <div>ratings</div>
          <div>price</div>
          <button>Buy now</button>
          <button>Add to cart</button>
        </div>
        <div>
          <p>product specifications</p>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
