import React from "react";
import styled from "styled-components";
import sketch from "../assets/Sketch.png";
import circle from "../assets/circle.png";
const MainDiv = styled.div`
  display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
  margin-top: 20vh;
  gap: 20px;
  width: 90%;
`;

const Button = styled.button`
  width: 13vw;
  height: 9vh;
  border: none;
  outline: none;
  background-color: #dae3f1;
  color: #254793;
  text-align: center;
  border-radius: 49px;
  cursor: pointer;
`;

const Image = styled.img`
  background-color: #dae3f1;
  width: 30px;
  height: 30px;
  margin-left: 30px;
`;
const Para = styled.p`
  margin-top: 10px;
  margin-right: 40px;
`;
const InnerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const MultipleButtons = () => {
  return (
    <>
      <center>
        <MainDiv>
          <Button>
            <InnerDiv>
              <Image src={sketch} />
              <Para>Sketch</Para>
            </InnerDiv>
          </Button>
          <Button>
            <InnerDiv>
              <Image src={sketch} />
              <Para>Sketch</Para>
            </InnerDiv>
          </Button>
          <Button>
            <InnerDiv>
              <Image src={sketch} />
              <Para>Sketch</Para>
            </InnerDiv>
          </Button>
          <Button>
            <InnerDiv>
              <Image src={sketch} />
              <Para>Sketch</Para>
            </InnerDiv>
          </Button>
          <Button>
            <InnerDiv>
              <Image src={sketch} />
              <Para>Sketch</Para>
            </InnerDiv>
          </Button>
          <Button>
            <InnerDiv>
              <Image src={sketch} />
              <Para>Sketch</Para>
            </InnerDiv>
          </Button>
        </MainDiv>
      </center>
    </>
  );
};

export default MultipleButtons;
