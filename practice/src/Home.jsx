import React, { useState } from "react";

//  handeling multiple inputs
const Home = () => {
  // first create a state for all input fields

  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    location: "",
    country: "",
    image: "",
  });

  // create a single handlechange for all the inputs

  const handleChange = (e) => {
    // value is basically the value of input field and name is just the name attribute of input
    // here name attribute an essential property
    const { name, value } = e.target;
    // console.log(e.target);
    // why are we doing this ?
    setValue({ ...value, [name]: value });
    // console.log(name, value);
  };

  const handleImageChange = (e) => {
    const [file] = e.target.files;
    console.log(file);
    setValue({ ...value, image: file });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          action=""
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            padding: "20px",
            gap: "20px",
          }}
        >
          <input
            placeholder="name"
            type="text"
            name="name"
            value={value.name}
            onChange={handleChange}
          />
          <input
            placeholder="email"
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          />
          <input
            placeholder="age"
            type="text"
            name="age"
            value={value.age}
            onChange={handleChange}
          />
          <input
            placeholder="location"
            type="text"
            name="location"
            value={value.location}
            onChange={handleChange}
          />
          <input
            placeholder="country"
            type="text"
            name="country"
            value={value.country}
            onChange={handleChange}
          />
          <input
            type="file"
            accept="image/*,.pdf,.doc,docx,.jpeg,.png"
            name="image"
            onChange={handleImageChange}
          />
        </form>
      </div>
    </>
  );
};

export default Home;
