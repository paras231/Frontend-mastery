import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 30vw;
  height: 30vh;
  background-color: yellow;
  padding-top:30px ;
`;
const Heading = styled.h1`
padding-top: 20px;
padding-left: 20px;
`


const Test = () => {
  return (
    <>
      <MainDiv>
      
        <Heading>Hello World</Heading>

      </MainDiv>
    </>
  );
};

export default Test;
