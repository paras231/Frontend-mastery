import React from "react";
import Card from "./Components/Card/Card";
import Form from "./Components/MultistepForm/Form";
import Dropdown from "./Components/Dropdown/Dropdown";
import RadioButtonFilter from "./Components/Filters/RadioButtonFilter";
import Modal1 from "./Components/Modal/Modal1";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Navbar2 from "./Components/Navbar/Navbar2";
import RangeFilter from "./Components/Filters/RangeFilter";
import A from "./StateManagement/A";
import B from "./StateManagement/B";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Form/> */}
      {/*
       */}
      {/* <RadioButtonFilter/> */}
      {/* <Modal1 /> */}
      {/* <Navbar /> */}
      {/* <Home/> */}
      {/* <Dropdown/> */}
      {/* <Navbar2 />
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/> */}
      {/* <RangeFilter/> */}

      {/*  use of memory router */}
      {/* <MemoryRouter>
        <Routes>
          <Route path="/" element={<B />} />
          <Route path="/gotoa" element={<A />} />
        </Routes>
      </MemoryRouter> */}

      {/* use of hash router */}

      <HashRouter>
        <Routes>
          <Route path="/" element={<B />} />
          <Route path="/gotoa" element={<A />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
