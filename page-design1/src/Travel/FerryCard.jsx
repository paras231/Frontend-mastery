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
  @media(min-width:320px) and (max-width: 375px) {
    width:98%;
    height:40vh;
    gap:60px;
    
  }
  @media(min-width:376px) and (max-width: 420px) {
    width:99%;
    height:40vh;
    gap:60px;
    
  }
  @media (min-width:992px) and (max-width:1025px){
    height:25vmax;
    width:62vmax;
  }
`;
const ImageDiv = styled.div``;
const Image = styled.img`
  height: 20vmax;
  @media(min-width:320px) and (max-width: 375px) {
    height:40vh;
  }
  @media(min-width:376px) and (max-width: 420px) {
    height:40vh;
  }
`;
const DetailsMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5vmax;
  margin-top: 2.5vmax;
  @media(min-width: 320px) and (max-width: 375px){
   justify-items:end;
   width:60vw;
  }
  @media(min-width: 376px) and (max-width: 420px){
   justify-items:end;
   width:60vw;
  }
`;
const FerryNameDiv = styled.div`
  display: flex;
  gap: 1vmax;
  font-size: 1rem;
  @media(min-width:320px) and (max-width: 375px) {
    font-size:20px;
    gap:3px;
  }
  @media(min-width:376px) and (max-width: 420px) {
    font-size:20px;
    gap:3px;
  }
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
  @media(min-width:320px) and (max-width: 375px) {
    font-size:20px;
    gap: 10px;
  }
  @media(min-width:376px) and (max-width: 420px) {
    font-size:20px;
    gap: 10px;
  }
`;
const TimeDiv = styled.div`
  display: flex;
  gap: 4vmax;
  font-size: 1.2rem;
  font-weight: 400;
  @media(min-width:320px) and (max-width: 375px) {
    font-size:20px;
    gap: 12px;
  }
  @media(min-width:376px) and (max-width: 420px) {
    font-size:20px;
    gap: 12px;
  }
`;
const LoactionDiv = styled.div`
  display: flex;
  gap: 4vmax;
  font-size: 1rem;
  font-weight: 400;
  @media(min-width: 320px) and (max-width: 375px){
    font-size:16px;
    gap: 10px;
    font-weight: 400;
  }
  @media(min-width: 376px) and (max-width: 420px){
    font-size:16px;
    gap: 10px;
    font-weight: 400;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  margin-top: 12vmax;
  margin-left: 9vmax;
  @media(min-wdith: 320px) and (max-wdith:375px){
  
    display:none;
  
  }
  @media(min-wdith: 376px) and (max-wdith:420px){
  
  display:none;

}
`;
const PriceText = styled.p`
  color: #b80000;
  font-weight: 600;
  font-size: 1.5rem;
  margin-left: 1vmax;
  @media(min-width: 320px) and (max-width: 375px){
    font-weight: 400;
  font-size: 14px;
  margin-top:17vh;
  margin-left:-60vw;
  
  }
  @media(min-width: 376px) and (max-width: 420px){
    font-weight: 400;
  font-size: 14px;
  margin-top:17vh;
  margin-left:-60vw;
  }
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
  @media(min-width:320px) and (max-width: 375px) {
    margin-left:-60vw;
    height: 6vh;
    width: 28vw;
  }
  @media(min-width:376px) and (max-width: 420px) {
    margin-left:-60vw;
    height: 6vh;
    width: 25vw;
  }
`;

//  select ferry component->

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vmax;
  width: 40vmax;
  @media(min-width: 320px) and (max-width: 375px){
    width: 98%;
    
  }
  @media(min-width: 376px) and (max-width: 420px){
    width: 100%;
    
  }
`;
const StyledRadio = styled.input`
@media(min-width:320px) and(max-width:375px){
  width:60vw;
  height:30vh;
}
`
const SliderWrapper = styled.div``;
const SelectSeatText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;
const SeatWrapper = styled.div`
  display: flex;
  gap: 3vmax;
  margin-top: 2vmax;
  @media(min-width: 320px) and (max-width: 375px){
    gap: 30vw;
  }
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
    width: 100%;
  }
`;

const AmenetiesWrapper = styled.div`
  display: flex;
  gap: 14vmax;

  margin-left: 55vmax;
  @media(min-width: 320px) and (max-width: 375px){
   
  }
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
  display: flex;
  gap: 6vmax;
  margin-left: 20vmax;
  @media(min-width:320px) and (max-width: 375px){
    margin-left:30vw;
  }
`;
const CloseText = styled.p`
  color: #636363;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
const ProceedButton = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: white;
  width: 26vmax;
  height: 2.5vmax;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 13px;
  @media(min-width: 320px) and (max-width: 375px){
    height: 6vh;
    font-weight: 700;
    font-size:0.8rem;
  }
  @media(min-width: 376px) and (max-width: 420px){
    height: 6vh;
    font-size:1rem;
    font-weight: 700;
  }
  @media (min-width:992px) and (max-width:1025px){
    height:3vmax;
    width: 28vmax;
    font-size:12px;
  }
`;

const FerryCard = () => {
  const [selected, setSelected] = React.useState(null);
  const [selectSeat, setSelectSeat] = React.useState("Economy");
  function SelectFerry() {
    return (
      <>
        <MainWrapper>
          <SelectSeatText>
            Select your seat type:
            <SeatWrapper>
              <Economy>
                <input
                  style={{ cursor: "pointer" }}
                  type="radio"
                  name="package"
                  value="Economy"
                  checked={selectSeat === "Economy"}
                  onChange={() => setSelectSeat("Economy")}
                />
                <EconomyText>Economy($230)</EconomyText>
              </Economy>
              <Luxury>
                <StyledRadio
                  style={{ cursor: "pointer" }}
                  type="radio"
                  name="package"
                  value="Luxury"
                  checked={selectSeat === "Luxury"}
                  onChange={() => setSelectSeat("Luxury")}
                />
                <LuxuryText>Luxury($350)</LuxuryText>
              </Luxury>
              <Royal>
                <StyledRadio
                  style={{ cursor: "pointer" }}
                  type="radio"
                  name="package"
                  value="Royal"
                  checked={selectSeat === "Royal"}
                  onChange={() => setSelectSeat("Royal")}
                />
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
            <CloseText onClick={() => setSelected(null)}>Close</CloseText>
            <ProceedButton>Proceed with {selectSeat}</ProceedButton>
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
