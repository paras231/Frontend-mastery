import React from "react";
import hotel from "../assets/hotel.png";

const AnimatedCard = () => {
  return (
    <>
      <div className="container mx-auto mt-20">
        <div className=" shadow-xl  rounded-xl w-3/4">
          <div className="flex gap-6">
            {/* image div */}
            <img src={hotel} alt="hotel" className="" />
            {/* content div */}
            <div className="flex flex-col gap-2 w-60">
              <p>GUEST HOUSE</p>
              <p className="text-bluetext">
                Symphony Samundra Beachside Jungle Resort & Spa
              </p>
              <p>GUEST HOUSE</p>
              <div className="flex flex-col gap-2 mt-6">
                <span>Jungle views with free Breakfast</span>
                <span>Jungle views with free Breakfast</span>
                <span>Jungle views with free Breakfast</span>
              </div>
            </div>
            {/* price div */}
            <div className="flex flex-col  items-end">
              <div className="bg-cancellation text-cancelborder rounded-3xl p-2 border border-cancelborder">
                Free cancelltion till 22 sept.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCard;
