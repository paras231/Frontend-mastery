import React from "react";

const Form = () => {
  return (
    <>
      <div className="container mx-auto w-full ">
        <form action="" className="flex justify-center  p-5">
          <div className="flex flex-col gap-10">
            <div className="md:flex  gap-5">
              <p className="font-bold">Username</p>
              <input
                type="text"
                placeholder="Enter username"
                className="md:h-6 h-10 md:mt-0 mt-4 placeholder:italic placeholder:text-slate-400 md:w-80 border-0 outline-slate-400 outline-dashed pl-4 rounded-md focus:ring focus:ring-violet-300"
              />
            </div>
            <div className="md:flex gap-14">
              <p className="font-bold">Email</p>
              <input
                required
                type="text"
                placeholder="Enter email"
                className="md:h-6 h-10 md:mt-0 mt-4 placeholder:italic placeholder:text-slate-400 md:w-80 border-0 outline-slate-400 outline-dashed pl-4 rounded-md focus:ring focus:ring-violet-300"
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 rounded-md md:w-60 w-40 text-white font-bold h-9 md:ml-20">
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
