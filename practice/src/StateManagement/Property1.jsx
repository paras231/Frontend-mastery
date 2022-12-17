import React, { useState } from "react";

// will need to pass the form data of property 1  to the property 2 on next page
const Property1 = () => {
  const [formData, setFormData] = useState({});
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    location: "",
    country: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(value);
  };
  console.log(formData);
  return (
    <>
      <h1>Property 1 Page</h1>
      <form
        onSubmit={handleSubmit}
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
        <button type="submit">Submi</button>
      </form>
    </>
  );
};

export default Property1;
