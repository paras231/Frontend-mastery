import React from "react";
import styled from "styled-components";
import v from "../assets/V.png";
import store from "../assets/store.png";

const MainDiv = styled.div`
  margin-top: 20vh;
  height: 40vh;
  background-color: #aaba59;
  width: 100%;
`;

const LogoDiv = styled.div`
  display: flex;
  padding-top: 80px;
  margin-left: 30px;
`;
const TextContainer = styled.div`
  display: grid;
  width: 30vw;
`;

const Image1 = styled.img``;
const Image2 = styled.img`
  height: 10vh;
  margin-top: 40px;
`;
const Footer = () => {
  return (
    <>
      <MainDiv>
        <LogoDiv>
          <Image1 src={v} />
          <Image2 src={store} />
        </LogoDiv>
      </MainDiv>
    </>
  );
};

export default Footer;
