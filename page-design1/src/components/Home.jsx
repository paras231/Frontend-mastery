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

  @media (min-width: 320px) and (max-width: 375px) {
    display:flex;
      flex-direction:column;
      height: 100vh;
      width: 90%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display:flex;
      flex-direction:column;
      height: 80vh;
      width: 90%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display:flex;
      flex-direction:column;
      height: 80vh;
      width: 90%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display:flex;
      flex-direction:column;
      height: 90vh;
      width: 90%;
  }

`;

const ParaDiv = styled.div`
  width: 30vw;
  padding-top: 10vh;
  padding-left: 5vw;
  display:grid;

  
  @media (min-width: 320px) and (max-width: 375px) {
      width:75vw;
      /* padding-left: 15vw; */
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width:75vw;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width:75vw;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width:75vw;
  }

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

   
  @media (min-width: 320px) and (max-width: 375px) {
    font-size: 1.5rem;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    font-size: 1.5rem;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    font-size: 1.6rem;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    font-size: 2rem;
  }

`;

const Image = styled.img`
  height:70vh;
  margin-top:-10vh;
  @media (min-width: 320px) and (max-width: 375px) {
    height:40vh;
    margin-top:10vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height:40vh;
    margin-top:10vh;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    height:40vh;
    margin-top:10vh;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    height:40vh;
    margin-top:10vh;
  }
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


    @media (min-width: 320px) and (max-width: 375px) {
      width:35vw;
      margin-left: 60px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width:35vw;
    margin-left: 70px;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width:35vw;
    margin-left: 80px;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width:35vw;
    margin-left: 80px;
  }


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
