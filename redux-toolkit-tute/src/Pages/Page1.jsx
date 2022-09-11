import React from "react";
import { addInput } from "../Redux/inputSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Page1 = () => {
  // this is the parent page
  const dispatch = useDispatch();

  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [location, setLocation] = React.useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addInput(name));
    console.log(name,age,location)
  };
  const  inputs  = useSelector((state) => state.inputs);
  console.log(inputs, "all data here");
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Page1;
