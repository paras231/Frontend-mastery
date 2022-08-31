import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  display: grid;
  gap: 2vmax;
  justify-content: center;
  align-items: center;
  margin-top: 25vmax;
`;

const Input1 = styled.input`
  width: 13vmax;
  height: 3vmax;
  border-radius:12px;
`;
const Form = () => {
  return (
    <>
      <FormWrapper>
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
      </FormWrapper>
    </>
  );
};

export default Form;
