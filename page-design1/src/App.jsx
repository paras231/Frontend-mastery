import React from "react";
import "./App.css";
import Share from "./Pages/Share";
import Category from "./components/Category";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Test from "./components/Test";
import Courses from "./components/Courses";
import Sidebar from "./components/Sidebar";
import Test2 from "./components/Test2";
import InputComponents from "./components/InputComponents";
import Cards from "./components/Cards";
import Footer2 from "./components/Footer2";
import AmazoneHome from "./Pages/AmazoneHome";
import Form from "./components/Form";
import Login from "./components/Login";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const user = true;
  return (
    <>
    {/* <Share/> */}
      {/* <Category />
      <Products />
      <Footer /> */}
      {/* <Signup /> */}
      {/* <Home /> */}
      {/* <Test /> */}

      {/* <Sidebar/> */}
      {/* <Test2/> */}
      {/* <InputComponents/> */}
      {/* <Cards/> */}
      {/* <Footer2/> */}
      {/* <Input/> */}
      {/* <AmazoneHome/> */}

      <BrowserRouter>
        <Routes>
          {user && isMobile ? (
            <Route path="/" element={<Form />} />
          ) : user && !isMobile ? (
            <Route path="/" element={<Login />} />
          ) : null}
          // matching user and mobile condition if user is logged in
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
