import React from "react";
import whitebg from "../assets/whitebg.png";
import footerbg from "../assets/footerbg.png";
import styled from "styled-components";

const Container = styled.div`
  background: url(${footerbg});
  background-repeat: no-repeat;
  height:40vmax;
  width:100%;
`;

const Wrapper = styled.div`
background-color: white;
position: absolute;
margin-top:10vmax;
  height:20vmax;
  width:90%;
`;

const Footer2 = () => {
  return <>
  <Container>
    <center>
     <Wrapper>HELLO</Wrapper>
     </center>
  </Container>
  </>;
};

export default Footer2;
