import React from "react";
import { addInput } from "../Redux/inputSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Page1 = () => {
  // this is the parent page
  const dispatch = useDispatch();

  const [username, setUsrename] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(username, email, password);
    dispatch(addInput({username, email, password }));
  };
  const inputs = useSelector((state) => state.inputs);
  console.log(inputs, "all data here");
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsrename(e.target.value)}
        />
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to="/page2">Page2</Link>
    </>
  );
};

export default Page1;
