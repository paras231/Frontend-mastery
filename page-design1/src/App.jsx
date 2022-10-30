import React from "react";
import "./App.css";
import Review from "./Travel/Review/Review";
import HotelList from "./Travel/HotelListComponent/HotelList";
import NewTest from "./AdvancedComponents/NewTest";
import CheckBoxWrapper from "./AdvancedComponents/CheckBoxWrapper";
import HotelPaymentDetail from "./Travel/Hotel/HotelPaymentDetail";
import HotelSelection from "./Travel/Hotel/HotelSelection";
import WaterActivityMain from "./Travel/Wateractivity/WaterActivityMain";
import LayoutTesting from "./AntDesignComponents/LayoutTesting";
import Test1 from "./AntDesignComponents/Test1";
import EditFerryTravelDetail from "./Travel/EditFerryTravelDetail";
import FerryTravelDetail from "./Travel/FerryTravelDetail";
import DivInput from "./AdvancedComponents/DivInput";
import FerrySlider from "./Travel/FerrySlider";
import FerryLists from "./Travel/FerryLists";
import Input from "./AdvancedComponents/Input";
import Cabs from "./Travel/Cabs";
import WhyBooking from "./Travel/WhyBooking";
import FerryInputComponent from "./Travel/FerryInputComponent";
import FerryBookingProcess from "./Travel/FerryBookingProcess";
import SignupNew from "./components/SignupNew";
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
import Test3 from "./components/Test3";
import MultipleInputs from "./AdvancedComponents/MultipleInputs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CabDetail from "./Travel/Cab/CabDetail";
import Package1 from "./Travel/CustomizePackage/Package1";
import Package2 from "./Travel/CustomizePackage/Package2";
import Package3 from "./Travel/CustomizePackage/Package3";
import BannerInput from "./Travel/Bannerinput/BannerInput";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const user = true;
  return (
    <>
      {/* <Review /> */}
      <HotelList />
      {/* <NewTest/> */}
      {/* <BannerInput/> */}
      {/* <Package1 /> */}
      {/* <StepperComponent/> */}
      {/* <CabDetail/> */}
      {/* <Test3 /> */}
      {/* <HotelSelection/> */}
      {/* <HotelPaymentDetail/> */}
      {/* <WaterActivityMain/> */}
      {/* <LayoutTesting /> */}
      {/* <Test1/> */}
      {/* <EditFerryTravelDetail/> */}
      {/* <FerryTravelDetail /> */}
      {/* <DivInput/> */}
      {/* <FerrySlider/> */}
      {/* <FerryLists/> */}
      {/* <FerryInputComponent/> */}
      {/* <FerryBookingProcess/> */}
      {/* <WhyBooking/> */}
      {/* <Cabs/> */}
      {/* <MultipleInputs/> */}
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

      {/* <BrowserRouter>
        <Routes>
          {user && isMobile ? (
            <Route path="/" element={<SignupNew />} />
          ) : user && !isMobile ? (
            <Route path="/" element={<Login />} />
          ) : null}
          // matching user and mobile condition if user is logged in
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Package1/>}/>
        <Route path="/package2" element={<Package2/>}/>
        <Route path="/package3" element={<Package3/>}/>
      </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
