import React from "react";
import styled from "styled-components";
import { data } from "./data";
import button from "../assets/button.png";

const Container = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20vh;
  margin-bottom: 20vh;
  width: 90%;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: grid;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display: grid;
  }
`;

const MainDiv = styled.div`
  display: flex;
  gap: 30px;

  width: 90%;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
    margin-left: 15%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
    margin-left: 15%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: grid;
    margin-left: 15%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display: grid;
    margin-left: 15%;
  }
`;

const CardMain = styled.div`
  width: 16vw;
  height: 70vh;
  box-shadow: 8px 8px 21px rgba(0, 0, 0, 0.12);
  border-radius: 20px;

  @media (min-width: 320px) and (max-width: 375px) {
    width: 66vw;
    height: 70vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 66vw;
    height: 70vh;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 66vw;
    height: 70vh;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 66vw;
    height: 70vh;
  }
`;

const CardUpper = styled.div`
  background-color: #fff0f3;
`;

const CardLower = styled.div`
  display: grid;
  margin-top: 30px;
  margin-left: -110px;
  gap: 20px;

  @media (min-width: 320px) and (max-width: 375px) {
    margin-top: 10px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-top: 10px;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    margin-top: 10px;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    margin-top: 10px;
  }
`;

const Duration = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #7a7a7a;
`;

const LanguageName = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

const Application = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  color: #7a7a7a;
  padding-left: 50px;
`;

const VideoButton = styled.img`
  position: absolute;
  margin-left: 40px;
  margin-top: -30px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 16vw;

  height: 40vh;
  @media (min-width: 320px) and (max-width: 375px) {
    width: 66vw;
    height: 40vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 66vw;
    height: 40vh;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 66vw;
    height: 40vh;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 66vw;
    height: 40vh;
  }
`;
const Dynamic = () => {
  return (
    <>
      <center>
        <Container>
          {data.map((i) => {
            return (
              <MainDiv key={i.id}>
                <CardMain>
                  <CardUpper>
                    <Image src={i.image} />
                  </CardUpper>
                  <VideoButton src={button} />
                  <CardLower>
                    <Duration>{i.duration}</Duration>
                    <LanguageName>{i.languageName}</LanguageName>
                    <Application>{i.application}</Application>
                  </CardLower>
                </CardMain>
              </MainDiv>
            );
          })}
        </Container>
      </center>
    </>
  );
};

export default Dynamic;
