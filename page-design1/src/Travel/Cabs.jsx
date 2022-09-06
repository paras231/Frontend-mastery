import React from "react";
import bg from "../assets/travelheader.png";
import styled from "styled-components";
import darkline from "../assets/darkline.png";
const StyledHeader = styled.div``;
const HeaderImage = styled.img`
  width: 100%;
  height: 34vmax;
`;

const DestinationWrapper = styled.div`
  width: 100%;
  background-color: #145843;
  display: flex;
  justify-content: space-evenly;
  height: 6.5vmax;
`;

const GreenWrapper = styled.div`
  position: absolute;
  margin-top: -2vmax;
  width: 100%;
`;

// different sections->
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 5vmax;
  margin-top: 1vmax;
  margin-left: 5vmax;
  margin-right: 5vmax;
`;
const FormText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: normal;
`;

const FormContent = styled.div`
  background: rgba(13, 162, 116, 0.8);
  width: 14vmax;
  height: 2vmax;
  color: white;
  border-radius: 5px;
`;
const FormContentText = styled.p`
  margin-left: 12px;
  margin-top: 5px;
`;

// checkbox wrapper main ->

const CheckBoxWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 3vmax;
`;

const CarModalCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6vmax;
  gap: 1.8vmax;
`;

const CheckBoxWrapper = styled.div`
  display: flex;

  gap: 1vmax;
`;

const StyledCheckBox = styled.input`
  height: 1.2vmax;
  width: 1.5vmax;
  border: 3px solid #000000;
  border-radius: 5px;
`;
const DieselText = styled.p`
  font-size: 1.1rem;
  font-weight: normal;
  font-weight: 500;
`;

// main content div->
const MainContainer = styled.div`
  display: flex;
  margin-top: 13vmax;
`;

/* cabs container */

const CabsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  background-color: yellow;
  height: 40vmax;
`;

const Cabs = () => {
  return (
    <>
      <StyledHeader>
        <HeaderImage src={bg} />
      </StyledHeader>
      <GreenWrapper>
        <DestinationWrapper>
          <FormWrapper>
            <FormText>Form</FormText>
            <FormContent>
              <FormContentText>Port Blair</FormContentText>
            </FormContent>
          </FormWrapper>
          <FormWrapper>
            <FormText>To</FormText>
            <FormContent>
              <FormContentText>Ross Garden</FormContentText>
            </FormContent>
          </FormWrapper>
          <FormWrapper>
            <FormText>Pick-Up Date</FormText>
            <FormContent>
              <FormContentText>Sept 8, 2022</FormContentText>
            </FormContent>
          </FormWrapper>
          <FormWrapper>
            <FormText>Pick-Up Time </FormText>
            <FormContent>
              <FormContentText>2:24 PM</FormContentText>
            </FormContent>
          </FormWrapper>
        </DestinationWrapper>
      </GreenWrapper>
      <MainContainer>
        <CheckBoxWrapperMain>
          <p style={{ fontWeight: "bold" }}>Fuel Type:</p>
          <CheckBoxWrapper>
            <StyledCheckBox type="checkbox" />
            <DieselText>Diesel</DieselText>
          </CheckBoxWrapper>
          <CarModalCheckBox>
            <p style={{ fontWeight: "bold" }}>Car Modal:</p>
            <CheckBoxWrapper>
              <StyledCheckBox type="checkbox" />
              <DieselText>Maruti Suzuki Ertiga</DieselText>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
              <StyledCheckBox type="checkbox" />
              <DieselText>Innova CrystaInnova Crysta</DieselText>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
              <StyledCheckBox type="checkbox" />
              <DieselText>Xylo, Ertiga</DieselText>
            </CheckBoxWrapper>
          </CarModalCheckBox>
        </CheckBoxWrapperMain>

        <CabsMainContainer>
          <center style={{ fontWeight: "bold" }}>Cabs</center>
        </CabsMainContainer>
      </MainContainer>
    </>
  );
};

export default Cabs;
