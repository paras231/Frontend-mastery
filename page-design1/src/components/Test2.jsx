import React from "react";
import styled from "styled-components";
import beach from "../assets/beach.png";
import Select from "react-select";
import hotel from "../assets/hotel.png";

const MainDiv = styled.div`
  width: 100%;
  height: 30vmax;
  background-image: url(${beach});
  background-repeat: no-repeat;
`;

const Container = styled.div`
  height: 20vmax;
  width: 30vmax;
  background-repeat: no-repeat;
  text-align: center;
`;
const Text = styled.p`
  color: white;
  font-size: 1.5rem;
  padding-top: 7vmax;
`;
const Test2 = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const myData = {
    image:hotel
  }
  return (
    <>
      <MainDiv></MainDiv>
      <div style={{ width: "30vw" }}>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>

      <Container style={{ backgroundImage: `url(${myData.image})` }}>
        <Text>HELLO WORLD</Text>
      </Container>
    </>
  );
};

export default Test2;
