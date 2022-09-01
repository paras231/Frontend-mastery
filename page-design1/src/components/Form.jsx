import React from "react";
import styled from "styled-components";
import { ImUser } from "react-icons/im";
import {FaLock} from "react-icons/fa";
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
const Icon2 = styled(FaLock)`
   position: absolute;
  margin-left: 12px;
  margin-top: 9px;
  width: 30px;
  height: 28px;
`
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
  margin-left:20px;
  margin-top:20px;
`;

const LoginButton = styled.button`
  width: 145px;
  height: 40px;
  border-radius: 40px;
  position: relative;
  margin-right: -30px;
  background-color: #145843;
  color: white;
  outline: none;
  border: none;
`;
const SignupButton = styled.button`
  width: 145px;
  height: 40px;
  border-radius: 40px;
  outline: none;
  border: none;
`;
const CheckBoxWrapper = styled.div`
  display: flex;
`;
const PasswordText = styled.p`
  margin-top: 12px;
`;
const Logo = styled.img`
  height: 110px;
  width: 110px;
`;

const LoginHeader = styled.img`
  background: url(${loginimg});
  width: 100%;
`;
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <LoginHeader src={loginimg} />
      <center>
        <Logo src={logo} />
      </center>
      <center>
        <ButtonWrapper className="btn-wrapper">
          <LoginButton>Login</LoginButton>
          <SignupButton>Signup</SignupButton>
        </ButtonWrapper>
      </center>
      <FormWrapper onSubmit={handleSubmit} className="form-wrapper">
        <IconInputWrapper>
          <Icon className="icon" />
          <Input1
            required
            className="myinput"
            placeholder="Enter Name"
            type="email"
          />
        </IconInputWrapper>
        <IconInputWrapper>
          <Icon2 />
          <Input1
            className="myinput"
            placeholder="Enter Name"
            type="password"
            required
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
