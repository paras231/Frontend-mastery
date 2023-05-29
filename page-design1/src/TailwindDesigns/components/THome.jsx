import React from "react";
const img =
  "https://images.unsplash.com/photo-1685305277176-06d606fb108d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const THome = () => {
  return (
    <>
      <h1 className="text-center bg-red-400">hELLO WORLD</h1>
      <div className="flex justify-center items-center text-lg font-Sans font-semibold mt-10">
        Why Us ?
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 text-justify ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            vero eveniet ea corporis maxime incidunt numquam quaerat
            perspiciatis exercitationem perferendis, distinctio corrupti sint!
            Totam veritatis doloribus voluptatem dolorum porro dolor.
          </p>
          <img src={img} alt="set" />
        </div>
      </div>
    </>
  );
};

export default THome;
