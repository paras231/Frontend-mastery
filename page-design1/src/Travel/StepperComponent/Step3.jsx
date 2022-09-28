import React from 'react'
import StepperComponent from "./StepperComponent";
import {Link} from "react-router-dom";

const Step3 = () => {
  return (
    <>
  <StepperComponent activeStep={2}/>
    <h1>Step3</h1>
    <Link to="/step4">
    <button>Continue</button>
    </Link>
    </>
  )
}

export default Step3