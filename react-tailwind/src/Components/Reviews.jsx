import React from "react";

const Reviews = () => {
  const url =
    "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className="container mx-auto mt-20 mb-5 px-4">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" shadow-xl px-6 box-border flex gap-4 text-center">
            <img src={url} alt="" className=" w-24 h-24 rounded-full" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eveniet ex, harum tempore sunt commodi veritatis aliquam fuga saepe.
          </div>
          <div className=" shadow-xl px-6 box-border flex gap-4 text-center">
            <img src={url} alt="" className=" w-24 h-24 rounded-full" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eveniet ex, harum tempore sunt commodi veritatis aliquam fuga saepe.
          </div>
          <div className="shadow-xl px-6 box-border flex  gap-4 text-center">
            <img src={url} alt="" className=" w-24 h-24 rounded-full" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eveniet ex, harum tempore sunt commodi veritatis aliquam fuga saepe.
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
