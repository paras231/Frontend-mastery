import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Page2 = () => {
  const [username, setUsrename] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const inputs = useSelector((state) => state.inputs);
  console.log(inputs, "in page2");
  return (
    <>
      <h1>Page 2 here</h1>
      <Link to="/">Page2</Link>
      <input
        type="text"
        defaultValue={inputs.username?.username}
        value={username}
        onChange={(e) => setUsrename(e.target.value)}
      />
      <input type="text" value={inputs.email?.email} />
      <input type="text" value={inputs.password?.password} />
    </>
  );
};

export default Page2;
