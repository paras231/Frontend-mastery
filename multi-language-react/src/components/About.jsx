import React from "react";
import { FormattedMessage, FormattedDate } from "react-intl";

const About = () => {
  return (
    <>
      <FormattedMessage id="app.testing.text" defaultMessage="i am testing" />
      <FormattedMessage id="about" defaultMessage="i am on about page" />
    </>
  );
};

export default About;
