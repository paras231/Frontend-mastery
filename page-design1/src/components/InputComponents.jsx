import React from "react";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";

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

const Options = styled.option`
    width: 15vmax;
  height: 3vmax;
  background-color: #145843;
  outline: none;
  color: rgba(255, 255, 255, 0.7);
`
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
       
        <SelectInput >
          <Options value="volvo"><HiLocationMarker style={{color:"yellow"}}/> Location</Options>
          <Options value="saab">Saab</Options>
          <Options value="opel">Opel</Options>
          <Options value="audi">Audi</Options>
        </SelectInput>
       
      </MainDiv>
    </>
  );
};

export default InputComponents;
