import React from "react";
import styled from "styled-components";
import { GrLocation } from "react-icons/gr";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vmax;
`;

const SelectInput = styled.select`
  width: 15vmax;
  height: 3vmax;
  background-color: #145843;
  outline: none;
  color: rgba(255, 255, 255, 0.7);
`;

const MainDiv = styled.div`
  display: flex;
  margin-left: 20vmax;
  margin-top: 20vmax;
`;

const IconDiv = styled.div`
  position: relative;
  background-color: #145843;
  width: 3vmax;
  height: 3vmax;
  outline: none;
  border: none;
  left: 0.3vmax;
`;

//! Notes->
// ? Used vmax property of CSS to set height and width automatically on any viewport/screen.
//? This is an important property.

const InputComponents = () => {
  return (
    <>
      <MainDiv>
        <IconDiv>
          <GrLocation
            style={{
              color: "red",
              height: "2vmax",
              width: "1.5vmax",
              marginTop: "0.5vmax",
              marginLeft: "1vmax",
            }}
          />
        </IconDiv>
        <SelectInput>
          <option value="volvo">Country</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </SelectInput>
      </MainDiv>
    </>
  );
};

export default InputComponents;
