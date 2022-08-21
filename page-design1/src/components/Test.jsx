import React from "react";
import styled from "styled-components";
import woman from "../assets/woman.png";
import button from "../assets/button.png";

const MainDiv = styled.div`

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20vh;
  justify-content: center;
  align-items: center;
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

const Image = styled.img`
  max-width: 50vw;
  max-height: 40vh;
  @media (min-width: 320px) and (max-width: 375px) {
    padding-left: 20%;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    padding-left: 20%;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    padding-left: 20%;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    padding-left: 20%;
  }
`;

const Card = styled.div`
  max-width: 30vw;
  max-width: 40vh;
  background-color: red;
  border-radius: 10px;
  display: grid;
  justify-content: center;
`;
const Test = () => {
  return (
    <>
      <center>
        <MainDiv>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
          <Card>
            <Image src={woman} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur libero suscipit impedit soluta quasi. Aliquam
              dolorem, vel nisi praesentium, debitis corporis quibusdam aut in
              eos vitae iure labore sint quod!
            </p>
          </Card>
        </MainDiv>
      </center>
    </>
  );
};

export default Test;
