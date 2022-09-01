import React, { useState } from "react";

const StateHooks = () => {
  // handeling multiple inputs in easy way
  const [showText, setShowText] = useState(false);
  const handleShowText = () => {
    setShowText(!showText);
  };
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    country: "",
    image: "",
  });

  const handleChange = (e) => {
    //const name = e.target.name
    //const value = e.target.value
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleImageChange = (e) => {
    const [file] = e.target.files;
    setValues({ ...values, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={values.name}
          placeholder="Enter Name"
          name="name" // important field
          onChange={handleChange}
        />
        <input
          type="email"
          value={values.email}
          placeholder="Enter Email"
          name="email" // important field
          onChange={handleChange}
        />
        <input
          type="password"
          value={values.password}
          placeholder="Enter Password"
          name="password" // important field
          onChange={handleChange}
        />
        <input
          type="number"
          value={values.age}
          placeholder="Enter Age"
          name="age" // important field
          onChange={handleChange}
        />
        <input
          type="text"
          value={values.gender}
          placeholder="Enter Gender"
          name="gender"
          onChange={handleChange}
        />
        <input
          type="text"
          value={values.country}
          placeholder="Enter Country"
          name="country" // important field
          onChange={handleChange}
        />
        <input
          type="file"
          placeholder="Select Image"
          name="image"
          onChange={handleImageChange}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleShowText}>Show Text</button>
      {showText ? <h1>Text is displaying</h1> : null}
      {/* using && operator with condition , so above condition can also be written like*/}
      {/* {showText && <h1>Text is displaying</h1> } */}
      {/* (if this part is true) && (this part will execute) */}
    </>
  );
};

export default StateHooks;
