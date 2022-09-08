import React from "react";
import ferry1 from "../assets/ferry1.png";
import styled from "styled-components";
import { ferryData } from "./data";
import SelectFerry from "./SelectFerry";
const CardMainContainer = styled.div`
  display: flex;
  gap: 3vmax;
  width: 60vmax;
  height: 24vmax;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const ImageDiv = styled.div`
  
`;
const Image = styled.img`
  height: 24vmax;
`;
const DetailsMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3vmax;
  margin-top: 3vmax;
`;
const FerryNameDiv = styled.div`
  display: flex;
  gap: 1vmax;
  font-size: 1.2rem;
`;
const FerryText = styled.p``;
const GreenText = styled.p`
  color: rgba(0, 173, 111, 1);
`;
const DepartureText = styled.p``;
const DerpartureArrivalWrapper = styled.div`
  display: flex;
  gap: 3vmax;
  font-size: 1.2rem;
  font-weight: 400;
`;
const TimeDiv = styled.div`
  display: flex;
  gap: 4vmax;
  font-size: 1.2rem;
  font-weight: 400;
`;
const LoactionDiv = styled.div`
  display: flex;
  gap: 4vmax;
  font-size: 1.2rem;
  font-weight: 400;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  margin-top: 13vmax;
  margin-left: 10vmax;
`;
const PriceText = styled.p`
  color: #b80000;
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: 1vmax;
`;
const Button = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: white;
  width: 8vmax;
  height: 2.5vmax;
  border: none;
  outline: none;
  cursor: pointer;
`;

const FerryCard = () => {


  const [show, setShow] = React.useState(false);
  const handleShow = (id) => {
    if(ferryData.map(i=>i.id===id)){
      setShow(!show);
    console.log(id)
    }
  
  };
  return (
    <>
      {ferryData.map((value) => {
        return (
          <>
            <CardMainContainer key={value.id}>
              <ImageDiv>
                <Image src={value.image} />
              </ImageDiv>
              <DetailsMainWrapper>
                <FerryNameDiv>
                  <FerryText>Ferry:</FerryText>
                  <GreenText>{value.name}</GreenText>
                </FerryNameDiv>
                <DerpartureArrivalWrapper>
                  <p>Departure</p>
                  <p>Arrival</p>
                </DerpartureArrivalWrapper>

                <TimeDiv>
                  <p>{value.dtime}</p>
                  <p>{value.atime}</p>
                </TimeDiv>
                <LoactionDiv>
                  <p>{value.location}</p>
                </LoactionDiv>
              </DetailsMainWrapper>
              <PriceWrapper>
                <PriceText>$45.00</PriceText>
                <Button onClick={()=>handleShow(value.id)}>Select Seats</Button>
              </PriceWrapper>
              
            </CardMainContainer>
            {show && <SelectFerry id={value.id}/>}
          </>
        );
      })}
    </>
  );
};

export default FerryCard;
