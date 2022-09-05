import React, { useState } from "react";

const MultipleInputs = () => {
  // will be using multiple inputs for a form->
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, image, checked, date, gender);
  };
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <center>
        <form
          onSubmit={handleSubmit}
          style={{ display: "grid", gap: "30px" }}
          action=""
        >
          <input
            onChange={(e) => setName(e.target.value)}
            style={{ width: "20vmax" }}
            type="text"
          />
          <input checked={checked} onChange={handleChange} type="checkbox" />
          <label for="vehicle1"> I have a bike</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="file"
            accept="image/*"
          />
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <p>Please select Gender</p>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={gender === "Male"}
            onChange={() => setGender("Male")}
          />
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={gender === "Female"}
            onChange={() => setGender("Female")}
          />{" "}
          Female
          <input
            type="radio"
            value="Other"
            name="gender"
            checked={gender === "Other"}
            onChange={() => setGender("Other")}
          />{" "}
          Other
          <input type="range"/>
          <button type="submit">Submit</button>
        </form>
      </center>
    </>
  );
};

export default MultipleInputs;
