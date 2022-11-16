import React, { useContext } from "react";
import { FormattedMessage, FormattedDate } from "react-intl";
import { Context } from "./components/Wrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

const App = (props) => {
  const context = useContext(Context);
  return (
    <>
      {/* <h1>app</h1>
      <h1>
        <FormattedMessage
          id="app.header"
          defaultMessage="Edit the files and save to reload"
        />
      </h1>
      <h3>
        <FormattedMessage id="app.content" defaultMessage="Learn React" />
      </h3>
      <span>
        <FormattedMessage
          id="app.channel.plug"
          defaultMessage="Tutorial brought to you by Lokalise"
        />
      </span> */}

      <BrowserRouter>
        <select value={context.locale} onChange={context.selectLanguage}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ar">Arabic</option>
        </select>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
