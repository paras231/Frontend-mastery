import React, { useState } from "react";

const MyForm = () => {
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
  return (
    <>
    <div className="bg-red-400 mt-40 container mx-auto h-full">
      <form>
        <input type="text" name="name" onChange={handleChange} />
        <input type="email" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <input type="phone" name="phone" onChange={handleChange} />
      </form>
      </div>
    </>
  );
};

export default MyForm;
