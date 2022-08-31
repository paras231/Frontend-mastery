import React from "react";
import styled from "styled-components";
import "./Form.css";
const FormWrapper = styled.form`
  display: grid;
  gap: 2vmax;
  justify-content: center;
  align-items: center;
 
`;

const Input1 = styled.input`
  width: 280px;
  height: 50px;
  border-radius: 12px;
  font-size: 20px;
`;
const Form = () => {
  return (
    <>
      <FormWrapper className="form-wrapper">
        <Input1
          className="myinput"
          placeholder="Enter Name"
          type="file"
          capture="environment"
          onFocus={false}
        />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
        <Input1 className="myinput" placeholder="Enter Name" type="text" />
      </FormWrapper>
    </>
  );
};

export default Form;
