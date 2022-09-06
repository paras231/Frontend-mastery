import React, { useState } from "react";
import bg from "../assets/travelheader.png";
import styled from "styled-components";
import { cabsData } from "./data";
import tick from "../assets/tick.png";
import Line from "../assets/line.png";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";
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
  gap: 1vmax;
  margin-left: 3vmax;
  margin-top: 6vmax;
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
  gap: 3vmax;
`;
// cabs card container->

const CardMainContainer = styled.div`
  display: flex;
  gap: 4vmax;
  width: 65vmax;
  height: 23vmax;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-left: 5vmax;
  @media (min-width: 992px) and (max-width: 1024px) {
    height: 30vmax;
    width: 70vmax;
  }
`;
const CardImageWrapper = styled.div`
  margin-top: 2vmax;
  margin-left: 2vmax;
`;
const CardImage = styled.img`
  height: 14vmax;
  width: 14vmax;
  border-radius: 5px;
`;

const CardDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CarName = styled.p`
  color: #006ce0;
  font-weight: 500;
  font-size: 1.6rem;
  margin-top: 2vmax;
`;

const CarTitle = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 1rem;
  margin-top: 1vmax;
`;
const CarSize = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 4vmax;
`;
const CarDesc = styled.div`
  width: 16vmax;
  height: 10vmax;
  font-size: 1rem;
  margin-top: 1vmax;
`;
const Sanitized = styled.div`
  display: flex;
  gap: 1vmax;
  margin-top: -4vmax;
  @media (min-width: 992px) and (max-width: 1024px) {
    margin-top: -2vmax;
  }
`;
const CardBookinWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5vmax;
  margin-left: -3vmax;
`;
const Cancellation = styled.div`
  width: 22vmax;
  height: 1.4vmax;
  font-size: 1rem;
  text-align: center;
  border-radius: 30px;
  border: 1px solid #0a8607;
  background: #bdffbc;
  color: #0a8607;
  @media (min-width: 992px) and (max-width: 1024px) {
    width: 28vmax;
    height: 1.6vmax;
  }
`;
const CancelText = styled.p``;

const Discount = styled.div`
  background: #ffecec;
  border: 1px solid #850000;
  border-radius: 30px;
  margin-top: 6vmax;
  text-align: center;
  width: 13vmax;
  height: 1.4vmax;
  margin-left: 7vmax;
`;

const PriceWrapper = styled.div`
  margin-top: 4vmax;
  margin-left: 15vmax;
  display: flex;
  gap:1.2vmax;
`;
const OldPrice = styled.p`
  color: #8d8d8d;
  font-size: 0.8rem;
`;

const NewPrice = styled.p`
  color: #000000;
  font-size: 1.7rem;
  font-weight: bold;
  margin-top:-1vmax;
`;

const Taxes = styled.p`
  margin-top:2vmax;
  font-size:1rem;
  margin-left: 15vmax;
`
//  next previous button wrapper->

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1vmax;
  margin-top: 4vmax;
  margin-left: 80%;
`;
const PreviousButton = styled.button`
  height: 2vmax;
  width: 2.5vmax;
  background:transparent;
  border:1px solid black;
  cursor: pointer;
`;
const NexButton = styled.button`
  height: 2vmax;
  width: 2.5vmax;
  background:transparent;
  border:1px solid black;
  cursor: pointer;
`;
const Cabs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [cabsPerPage] = useState(4);
  const indexOfLastCab = currentPage + cabsPerPage;
  const indexOfFirstCab = indexOfLastCab - cabsPerPage;
  const currentCabs = cabsData.slice(indexOfFirstCab, indexOfLastCab);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const next = () => {
    if (currentPage < Math.ceil(cabsData.length / cabsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  console.log(currentCabs);
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
        <img src={Line} />
        <CabsMainContainer>
          <center
            style={{ fontWeight: "bold", color: "#145843", fontSize: "1.5rem" }}
          >
            Cabs
          </center>
          {currentCabs.map((value) => {
            return (
              <>
                <CardMainContainer key={value.id}>
                  <CardImageWrapper>
                    <CardImage src={value.image} />
                  </CardImageWrapper>
                  <CardDetailsWrapper>
                    <CarName>{value.name}</CarName>
                    <CarTitle>{value.title}</CarTitle>
                    <CarSize>{value.size}</CarSize>
                    <CarDesc>{value.desc}</CarDesc>
                    <Sanitized>
                      <img style={{ height: "1.4vmax" }} src={tick} />
                      <span style={{ fontSize: "1.2rem" }}>
                        Sanitizers Installed
                      </span>
                    </Sanitized>
                  </CardDetailsWrapper>
                  <img src={Line} />
                  <CardBookinWrapper>
                    <Cancellation>
                      Free cancelltion till1 hour of departure
                    </Cancellation>
                    <Discount>41% cheaper than usual</Discount>
                    <PriceWrapper>
                      <OldPrice>$726</OldPrice>
                      <NewPrice>
                      $
                     {value.price}
                      </NewPrice>
                    </PriceWrapper>
                    <Taxes>$ {value.taxes}Taxes & Fees</Taxes>
                  </CardBookinWrapper>
                </CardMainContainer>
              </>
            );
          })}
          <ButtonWrapper>
            <PreviousButton onClick={prev}>
              <HiArrowLeft />
            </PreviousButton>
            <NexButton onClick={next}>
              <HiArrowRight />
            </NexButton>
          </ButtonWrapper>
        </CabsMainContainer>
      </MainContainer>
    </>
  );
};

export default Cabs;
