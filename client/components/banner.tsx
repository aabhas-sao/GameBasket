import React from "react";

const Banner6 = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className=" flex flex-col items-center align-center md:flex-row justify-evenly">
        <div className="flex flex-col items-center md:flex-row">
          <div className="">
            <h1 className="text-3xl font-bold text-gray-700">Best Deal</h1>
            <p className="">
              Save upto <span className="font-bold">50%</span>
            </p>
          </div>
          <div className="">
            <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" />
          </div>
        </div>
        <div className="items-center flex mt-12 md:mt-0 md:flex-row">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-700">Game Console</h1>
            <p className="">
              Save Upto <span className="font-bold">30%</span>
            </p>
          </div>
          <div className="">
            <img
              src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner6;
