import React from "react";
import ferry1 from "../assets/ferry1.png";
import styled from "styled-components";
import { ferryData } from "./data";
import tick from "../assets/tick.png";
import whitetick from "../assets/whitetick.png";

const CardMainContainer = styled.div`
  display: flex;
  gap: 3vmax;
  width: 60vmax;
  height: 20vmax;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 10px 11px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
const ImageDiv = styled.div``;
const Image = styled.img`
  height: 20vmax;
`;
const DetailsMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5vmax;
  margin-top: 2.5vmax;
`;
const FerryNameDiv = styled.div`
  display: flex;
  gap: 1vmax;
  font-size: 1rem;
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
  font-size: 1rem;
  font-weight: 400;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  margin-top: 12vmax;
  margin-left: 9vmax;
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

//  select ferry component->

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vmax;
  width: 40vmax;
`;
const SliderWrapper = styled.div``;
const SelectSeatText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;
const SeatWrapper = styled.div`
  display: flex;
  gap: 3vmax;
  margin-top: 2vmax;
`;
const Economy = styled.div`
  display: flex;
  gap: 1vmax;
`;
const Luxury = styled.div`
  display: flex;
  gap: 1vmax;
`;
const Royal = styled.div`
  display: flex;
  gap: 1vmax;
`;
const RoyalText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
const LuxuryText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
const EconomyText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;
const AmenetiesText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const StyledHrTag = styled.hr`
  width: 65vmax;
  margin-top: -3vmax;
  @media (min-width: 375px) and (max-width: 420px) {
    margin-left: 0;
    width: 70vmax;
  }
`;

const AmenetiesWrapper = styled.div`
  display: flex;
  gap:14vmax;
 
  margin-left: 55vmax;
`;

const GridWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  margin-left: -50vmax;
`;
const GridWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
`;
const TickImage = styled.img`
  height: 1.7vmax;
  width: 1.7vmax;
`;
const DeckDiv = styled.div`
  display: flex;
  gap: 1vmax;
`;
const HighSpeedDiv = styled.div`
  display: flex;
  gap: 1vmax;
`;

const AirConditionedDiv = styled.div`
  display: flex;
  gap: 1vmax;
`;

const CafetaeriaDiv = styled.div`
  gap: 1vmax;
  display: flex;
`;
const PermiumDiv = styled.div`
  display: flex;
  gap: 1vmax;
`;
const ExtraLegSpace = styled.div`
  display: flex;
`;
const ExclusiveDiv = styled.div`
  display: flex;
`;
const Snacks = styled.div`
  display: flex;
`;
const MealIncluded = styled.div`
  display: flex;
`;
const TextStyled = styled.p`
  font-size: 1rem;
  font-weight: 400;
`;
const TwoButtonWrapper = styled.div`
 display:flex;
 gap:6vmax;
 margin-left:25vmax;
`
const CloseText = styled.p`
  color: #636363;
  font-size:1rem;
  font-weight:500;

`
const ProceedButton = styled.button`
background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: white;
  width: 15vmax;
  height: 2.5vmax;
  border: none;
  outline: none;
  cursor: pointer;
  font-size:1rem;
`

const FerryCard = () => {
  const [selected, setSelected] = React.useState(null);

  function SelectFerry() {
    return (
      <>
        <MainWrapper>
          <SelectSeatText>
            Select your seat type:
            <SeatWrapper>
              <Economy>
                <input type="radio" />
                <EconomyText>Economy($230)</EconomyText>
              </Economy>
              <Luxury>
                <input type="radio" />
                <LuxuryText>Luxury($350)</LuxuryText>
              </Luxury>
              <Royal>
                <input type="radio" />
                <RoyalText>Royal($550)</RoyalText>
              </Royal>
            </SeatWrapper>
          </SelectSeatText>

          <AmenetiesText>Amenities - Economy</AmenetiesText>
          <StyledHrTag />
          <AmenetiesWrapper>
            <GridWrapper1>
              <DeckDiv>
                <TickImage src={tick} />
                <TextStyled>Open Deck Access</TextStyled>
              </DeckDiv>
              <HighSpeedDiv>
                <TickImage src={tick} />
                <TextStyled>High-Speed Ferry</TextStyled>
              </HighSpeedDiv>
              <AirConditionedDiv>
                <TickImage src={tick} />
                Air Conditioned
              </AirConditionedDiv>
              <CafetaeriaDiv>
                <TickImage src={tick} />
                Cafeteria
              </CafetaeriaDiv>
              <PermiumDiv>
                <TickImage src={whitetick} />
                <TextStyled>Premium Seating</TextStyled>
              </PermiumDiv>
            </GridWrapper1>
            <GridWrapper2>
              <PermiumDiv>
                <TickImage src={whitetick} />
                <TextStyled>Premium Seating</TextStyled>
              </PermiumDiv>
              <PermiumDiv>
                <TickImage src={whitetick} />
                <TextStyled>Premium Seating</TextStyled>
              </PermiumDiv>
              <PermiumDiv>
                <TickImage src={whitetick} />
                <TextStyled>Premium Seating</TextStyled>
              </PermiumDiv>
            </GridWrapper2>
           
          </AmenetiesWrapper>
          <TwoButtonWrapper>
        <CloseText>
          Close
        </CloseText>
        <ProceedButton>
        Proceed with Economy
        </ProceedButton>
            </TwoButtonWrapper>
        </MainWrapper>
      </>
    );
  }

  return (
    <>
      {ferryData.map((value, index) => {
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
                <Button
                  onClick={() => setSelected(index === selected ? null : index)}
                >
                  Select Seats
                </Button>
              </PriceWrapper>
            </CardMainContainer>
            {selected === index && <SelectFerry />}
          </>
        );
      })}
    </>
  );
};

export default FerryCard;

{
  /* <button onClick={() => setSelected(null)}>Close</button> */
}
