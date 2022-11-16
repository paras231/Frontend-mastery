import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IntlProvider } from "react-intl";
import Wrapper from "./components/Wrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Wrapper>
    <App date={Date.now()} />
  </Wrapper>
);
