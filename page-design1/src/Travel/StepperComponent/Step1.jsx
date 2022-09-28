import React from 'react'
import StepperComponent from "./StepperComponent";
import {Link} from "react-router-dom";
const Step1 = () => {
  return (
   <>
   <StepperComponent activeStep={0} />
    <h1>Step1</h1>
    <Link to="/step2">
    <button>Continue</button>
    </Link>
    
   </>
  )
}

export default Step1