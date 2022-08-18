import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";

const MainDiv = styled.div`
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: grid;
    gap:30px;
`;

const InputDiv = styled.div`
  display: flex;
  box-shadow: 10px 10px 34px rgba(0, 0, 0, 0.25);

`;



const Input = styled.input`
 ::placeholder,
  ::-webkit-input-placeholder {
    color: blueviolet;
    padding-left: 10px;
  }
  border:none;
  outline: none;
  width:30vw;
    height:8vh;
    border-radius:10px;

    @media (min-width: 320px) and (max-width: 375px) {
    width:40vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width:40vw;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: grid;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display: grid;
  }
`;

const Icon = styled(FaUserAlt)`
  color: red;
  margin-top:20px;
    margin-right:10px;
`;
const Signup = () => {
  return (
    <>
      <MainDiv>
        <Form>
          <InputDiv>
            <Input type="text" placeholder="Name" />
            <Icon />
          </InputDiv>
          <InputDiv>
            <Input type="email" placeholder="Email" />
            <Icon />
          </InputDiv>
          <InputDiv>
            <Input type="text" placeholder="Username" />
            <Icon />
          </InputDiv>
        </Form>
      </MainDiv>
    </>
  );
};

export default Signup;
