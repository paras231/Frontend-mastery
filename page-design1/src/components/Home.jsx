import React from "react";
import styled from "styled-components";
import girl from "../assets/girl.png";
import MultipleButtons from "./MultipleButtons";
import Courses from "./Courses";

const MainDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  background-color: #dfd6d9;
  border-radius: 10px;
  height: 60vh;
  width: 90%;
  margin-top: 20vh;
`;

const ParaDiv = styled.div`
  width: 30vw;
  padding-top: 10vh;
  padding-left: 5vw;
  display:grid;
`;

const Para = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  line-height: 72px;
  /* or 164% */

  text-align: center;
  letter-spacing: 0.1em;

  color: #000000;
`;

const Image = styled.img`
  height:70vh;
  margin-top:-10vh;

`
const Button  = styled.button`
    background-color: #385FB5;
    color:white;
    width:15vw;
    height:7vh;
    border:none;
    outline:none;
    border-radius: 10px;
    cursor:pointer;
    margin-left: 90px;
`
const Home = () => {
  return (
    <>
    <MultipleButtons/>
      <center>
        <MainDiv>
          <ParaDiv>
            <Para>What you want to learn?</Para>
            <Button>Get Started</Button>
          </ParaDiv>
          <Image src={girl}/>
        </MainDiv>
      </center>
     
        <Courses/>
     
    </>
  );
};

export default Home;
