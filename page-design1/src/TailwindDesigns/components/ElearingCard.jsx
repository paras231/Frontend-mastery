import React from "react";
import kids from "../../assets/kidslearn.png";

const ElearingCard = () => {
  return (
    <>
      <div className="container flex justify-center items-center mt-40">
        <div className="grid  gap-10 md:gap-20 lg:gap-40 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 content-center">
          <div className="w-36 sm:w:36 md:w-40 lg:w-40 pr-2 bg-card_bg cursor-pointer rounded-md shadow-md">
            <div className=" ">
              <img src={kids} alt="" />
            </div>
            <div className="text-center text-white">
              <span>Words</span>
            </div>
          </div>
          <div className="w-36 sm:w:36 md:w-40 lg:w-40 pr-2 bg-card_bg cursor-pointer">
            <div className=" ">
              <img src={kids} alt="" />
            </div>
            <div className="text-center text-white">
              <span>Words</span>
            </div>
          </div>
          <div className="w-36 sm:w:36 md:w-40 lg:w-40 pr-2 bg-card_bg cursor-pointer">
            <div className=" ">
              <img src={kids} alt="" />
            </div>
            <div className="text-center text-white">
              <span>Words</span>
            </div>
          </div>
          <div className="w-36 sm:w:36 md:w-40 lg:w-40 pr-2 bg-card_bg cursor-pointer">
            <div className=" ">
              <img src={kids} alt="" />
            </div>
            <div className="text-center text-white">
              <span>Words</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElearingCard;

const PackageCard = () => {
  return (
    <>
      <div>
        <div className="flex">
          <img src={kids} alt="kids" />
          <div className="flex flex-col gap-5">
              
          </div>
        </div>
      </div>
    </>
  );
};
