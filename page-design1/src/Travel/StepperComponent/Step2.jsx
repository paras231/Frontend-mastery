import React from 'react'
import StepperComponent from "./StepperComponent";
import {Link} from "react-router-dom";
const Step2 = () => {
  return (
    <>
<StepperComponent activeStep={1}/>
    <h1>Step2</h1>
    <Link to="/step3">
    <button>Continue</button>
    </Link>
    </>
  )
}

export default Step2