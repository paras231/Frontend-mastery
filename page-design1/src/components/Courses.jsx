import React from "react";
import styled from "styled-components";
import woman from "../assets/woman.png";
import button from "../assets/button.png";

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  gap: 30px;
  margin-top: 20vh;
  margin-bottom: 20vh;
  width: 90%;
  @media (min-width: 320px) and (max-width: 375px) {
    display:grid;
    margin-left:15%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display:grid;
    margin-left:15%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display:grid;
    margin-left:15%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display:grid;
    margin-left:15%;
  }
`;

const CardMain = styled.div`
  width: 16vw;
  height: 60vh;
  box-shadow: 8px 8px 21px rgba(0, 0, 0, 0.12);
  border-radius: 20px;

  @media (min-width: 320px) and (max-width: 375px) {
    width: 66vw;
    height: 60vh;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 66vw;
    height: 56vh;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 66vw;
    height: 52vh;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 66vw;
    height: 46vh;
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

const Courses = () => {
  return (
    <>
      <center>
        <MainDiv>
          <CardMain>
            <CardUpper>
              <img src={woman} />
            </CardUpper>
            <VideoButton src={button} />
            <CardLower>
              <Duration>-2h 45min</Duration>
              <LanguageName>Core Java</LanguageName>
              <Application>Mobile Application</Application>
            </CardLower>
          </CardMain>
          <CardMain>
            <CardUpper>
              <img src={woman} />
            </CardUpper>
            <VideoButton src={button} />
            <CardLower>
              <Duration>-2h 45min</Duration>
              <LanguageName>Core Java</LanguageName>
              <Application>Mobile Application</Application>
            </CardLower>
          </CardMain>
          <CardMain>
            <CardUpper>
              <img src={woman} />
            </CardUpper>
            <VideoButton src={button} />
            <CardLower>
              <Duration>-2h 45min</Duration>
              <LanguageName>Core Java</LanguageName>
              <Application>Mobile Application</Application>
            </CardLower>
          </CardMain>
       
          <CardMain>
            <CardUpper>
              <img src={woman} />
            </CardUpper>
            <VideoButton src={button} />
            <CardLower>
              <Duration>-2h 45min</Duration>
              <LanguageName>Core Java</LanguageName>
              <Application>Mobile Application</Application>
            </CardLower>
          </CardMain>
       
        
        </MainDiv>
      </center>
    </>
  );
};

export default Courses;
