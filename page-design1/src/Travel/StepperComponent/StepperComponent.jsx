import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdLocalShipping } from "react-icons/md";
import { MdLibraryAddCheck } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const StepperComponent = ({ activeStep }) => {
  const steps = [
    { icon: <MdLocalShipping /> },
    { icon: <MdLibraryAddCheck /> },
    { icon: <MdAccountBalanceWallet /> },
    { icon: <MdLibraryAddCheck /> },
  ];
  const stepStyles = {
    boxSizing: "border-box",
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#e710d9",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#f44a4a",
        width: "10vmax",
        height: "10vmax",
      },
    },
  }));

  return (
    <>
      <Stepper
        activeStep={1}
        connector={<QontoConnector />}
        alternativeLabel={true}
      >
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}
          >
            <StepLabel
              sx={{
                ".MuiStepIcon-text": {
                  display: "none",
                },
              }}
              iconContainerStyle={{ display: "none" }}
            ></StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default StepperComponent;
