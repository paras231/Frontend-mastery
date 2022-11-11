import React from "react";

const Cards = () => {
  const url =
    "https://images.unsplash.com/photo-1668079364981-17bc56e56b6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className="container mx-auto  mt-20 w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shadow-lg	cursor-pointer p-1 hover:bg-blue-500 ease-in duration-700 ">
            <img src={url} alt="" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, veniam. Totam placeat labore quae pariatur expedita
            nesciunt esse voluptatum distinctio iusto at harum dolor molestias
            asperiores, modi vero alias minima.
          </div>
          <div className="shadow-lg	cursor-pointer p-1">
            <img src={url} alt="" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, veniam. Totam placeat labore quae pariatur expedita
            nesciunt esse voluptatum distinctio iusto at harum dolor molestias
            asperiores, modi vero alias minima.
          </div>
          <div className="shadow-lg	cursor-pointer p-1">
            <img src={url} alt="" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, veniam. Totam placeat labore quae pariatur expedita
            nesciunt esse voluptatum distinctio iusto at harum dolor molestias
            asperiores, modi vero alias minima.
          </div>
          <div className="shadow-lg	cursor-pointer p-1">
            <img src={url} alt="" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, veniam. Totam placeat labore quae pariatur expedita
            nesciunt esse voluptatum distinctio iusto at harum dolor molestias
            asperiores, modi vero alias minima.
          </div>
          <div className="shadow-lg	cursor-pointer text-justify p-1">
            <img src={url} alt="" />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, veniam. Totam placeat labore quae pariatur expedita
            nesciunt esse voluptatum distinctio iusto at harum dolor molestias
            asperiores, modi vero alias minima.
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
