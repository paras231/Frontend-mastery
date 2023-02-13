import React, { useState } from "react";
import axios from "axios";
const Form = () => {
  const [name, setname] = useState("");
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    try {
      myForm.append("name", field.name);
      myForm.append("email", field.email);
      myForm.append("password", field.password);
      const { data } = await axios.post(
        "http://localhost:3000/api/user/signup",
        myForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      if(data){
        alert(data.message)
      }
    } catch (error) {
      console.log(error.message);
      alert('Something went wrong')
    }
  };
  return (
    <>
      <div className="container mx-auto w-full ">
        <form onSubmit={handleSubmit} className="flex justify-center  p-5">
          <div className="flex flex-col gap-10">
            <div className="md:flex  gap-5">
              <p className="font-bold">Username</p>
              <input
                name="name"
                type="text"
                value={field.name}
                onChange={handleChange}
                placeholder="Enter username"
                className="md:h-6 h-10 md:mt-0 mt-4 placeholder:italic placeholder:text-slate-400 md:w-80 border-0 outline-slate-400 outline-dashed pl-4 rounded-md focus:ring focus:ring-violet-300"
              />
            </div>
            <div className="md:flex gap-14">
              <p className="font-bold">Email</p>
              <input
                name="email"
                type="text"
                value={field.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="md:h-6 h-10 md:mt-0 mt-4 placeholder:italic placeholder:text-slate-400 md:w-80 border-0 outline-slate-400 outline-dashed pl-4 rounded-md focus:ring focus:ring-violet-300"
              />
              <input
                name="password"
                type="password"
                value={field.password}
                onChange={handleChange}
                placeholder="Enter pass"
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
