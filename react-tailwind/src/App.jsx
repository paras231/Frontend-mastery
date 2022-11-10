import React from "react";

const App = () => {
  const url =
    "https://images.unsplash.com/photo-1613819641912-9917297cf8d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kYW1hbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex gap-10 bg-blue-400 md:bg-red-400 md:flex-col lg:bg-green-400 lg:flex-row">
        <span>HELLOW WORLD</span>
        <h1>Tailwind CSS</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="ease-in duration-300 cursor-pointer hover:bg-sky-700 sm:flex sm:flex-row md:flex md:flex-col lg:flex lg:flex-col  w-80 bg-slate-400 shadow-lg rounded-xl text-center box-border ">
          <img src={url} alt="" />
          <div className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            molestias libero odio pariatur? Velit rerum molestias quaerat
            obcaecati similique sequi, veniam, a corrupti ipsa in exercitationem
            officia soluta, tempore quia?
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
