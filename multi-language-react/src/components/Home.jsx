import React from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* <h1>Home page</h1> */}
      <span>
      <FormattedMessage
      id="app.testing.text"
      defaultMessage="i am test"
      />
      </span>
     <Link to="/about"> go to About</Link>
    </>
  );
};

export default Home;
