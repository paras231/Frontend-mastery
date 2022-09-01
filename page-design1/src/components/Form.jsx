import React from "react";
import styled from "styled-components";
import { ImUser } from "react-icons/im";
import loginimg from "../assets/loginimg.png";
import Checkbox from "@mui/material/Checkbox";
import logo from "../assets/sealogo.png";
import "./Form.css";

const FormWrapper = styled.form`
  display: grid;
  gap: 2vmax;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;

const Input1 = styled.input`
  width: 250px;
  height: 50px;
  border-radius: 20px;
  font-size: 20px;
  ::-webkit-input-placeholder {
    color: black;
  }

  text-align: center;
  border: 1px solid #145843;
`;
const IconInputWrapper = styled.div`
  display: flex;
`;
const Icon = styled(ImUser)`
  position: absolute;
  margin-left: 12px;
  margin-top: 9px;
  width: 30px;
  height: 36px;
`;
const Button = styled.button`
  height: 50px;
  width: 100%;
  border-radius: 35px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, #2fbf8c 0%, #0da274 54.69%, #4ed19e 100%);
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 290px;
  height: 60px;
  border-radius: 40px;
`;

const LoginButton = styled.button`
  width: 145px;
  height: 50px;
  border-radius: 40px;
  position: relative;
  margin-right: -30px;
  background-color: #145843;
  color: white;
`;
const SignupButton = styled.button`
  width: 145px;
  height: 50px;
  border-radius: 40px;
`;
const CheckBoxWrapper = styled.div`
  display: flex;
`;
const PasswordText = styled.p`
  margin-top: 12px;
`;
const Logo = styled.img`
  height: 130px;
  width: 130px;
`;

const Form = () => {
  return (
    <>
      <img src={loginimg} />
      <center>
        <Logo src={logo} />
      </center>
      <center>
        <ButtonWrapper className="btn-wrapper">
          <LoginButton>Login</LoginButton>
          <SignupButton>Signup</SignupButton>
        </ButtonWrapper>
      </center>
      <FormWrapper className="form-wrapper">
        <IconInputWrapper>
          <Icon className="icon" />
          <Input1 className="myinput" placeholder="Enter Name" type="email" />
        </IconInputWrapper>
        <IconInputWrapper>
          <Icon />
          <Input1
            className="myinput"
            placeholder="Enter Name"
            type="password"
          />
        </IconInputWrapper>

        <CheckBoxWrapper>
          <Checkbox />
          <PasswordText>Forgot Password?</PasswordText>
        </CheckBoxWrapper>
        <Button type="submit">Login</Button>
      </FormWrapper>
    </>
  );
};

export default Form;
