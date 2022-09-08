import React from "react";
import styled from "styled-components";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";

const CheckBoxWrapper = styled.div`

 margin-top: 10vmax;
 display:flex;
 gap:2vmax;
`

const WrapperBox = styled.div`
display:flex;
gap:1vmax;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10vmax;
  margin-left: 10%;
  box-shadow: 10px 10px 32px rgba(0, 0, 0, 0.12);
  border-radius:3px;
  width:80%;
`;

const PasssangersWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8vmax;
`;
const PassangersText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;
const AdlutText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const InfantsText = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const AdultsSelectWrapper = styled.div`
  display: grid;
  gap: 3vmax;
`;
const InfantsSelectWrapper = styled.div`
  display: grid;
  gap: 3vmax;
`;

const InputWrapper = styled.div`
  display: flex;
  width: 15vmax;
  gap: 3vmax;
  height: 3vmax;
  background: #f2f2f2;
  border-radius: 5px;
`;

const ButtonNegative = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0.5vmax;
  margin-left: 2vmax;
  cursor: pointer;
`;
const ButtonPositive = styled.span`
  font-size: 1.4rem;
  margin-top: 0.5vmax;
  cursor: pointer;
`;

const InputValue = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 1.4vmax;
  font-size: 1rem;
`;

//
const SelectTripText = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2vmax;
  margin-left:11vmax;
`;

const TripText = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2vmax;
  margin-left:11vmax;
`;
// form container->

const FormMainContainer = styled.div`
  display: grid;
`;

const FormContainer = styled.div`
  display: flex;
  gap: 8vmax;
  margin-top: 3vmax;
  margin-left:6vmax;
  justify-content: center;
`;
const FromWrapper = styled.div`
  display: grid;
  gap: 1vmax;
`;
const StyledText = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;
const FromSelect = styled.select`
  width: 14vmax;
  height: 3vmax;
  border: none;
  outline: none;
  background: #f2f2f2;
  border-radius: 5px;
  padding-left: 1vmax;
`;

const DateInput = styled.input`
  width: 14vmax;
  height: 3vmax;
  outline: none;
  border: none;
  background: #f2f2f2;
  border-radius: 5px;
`;
const AddTrip = styled.div`
  display: flex;
  gap: 2vmax;
  margin-top: 3vmax;
  margin-left:12vmax;
`;
const AddTripText = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;

const IconWraper = styled.div`
    display:flex;
    gap:60vmax;
`
const CloseIcon = styled(AiOutlineClose)`
  margin-top:3vmax;
  cursor: pointer;
`
const SearchButton  = styled.button`
  background: linear-gradient(180deg, #2bbc89 0%, #10a476 47.92%, #44ca98 100%);
  border-radius: 50px;
  color: white;
  width: 9vmax;
  height: 2.5vmax;
  border: none;
  outline: none;
  margin-left: 13.8vmax;
  margin-top: 1vmax;
  cursor: pointer;
  margin-left:32vmax;
`
const FerryInputComponent = () => {
  const [value, setValue] = React.useState(1);
  const [value2, setValue2] = React.useState(1);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value <= 1) return;
    setValue(value - 1);
  };
  const increment2 = () => {
    setValue2(value2 + 1);
  };
  const decrement2 = () => {
    if (value2 <= 1) return;
    setValue2(value2 - 1);
  };

  const [roundTrip, setRoundTrip] = React.useState(1);

  const handleSet = () => {
    setRoundTrip(roundTrip + 1);
  };

  const handleClose = ()=>{
    setRoundTrip(roundTrip - 1);
  }
  return (
    <>
<CheckBoxWrapper>
  <WrapperBox>
  <input type="radio" name="" id="" />
  <p>Packages</p>
  </WrapperBox>
 
  <WrapperBox>
  <input type="radio" name="" id="" />
  <p>Packages</p>
  </WrapperBox>
</CheckBoxWrapper>
      <MainContainer>
        <PasssangersWrapper>
          <PassangersText>Select Passengers</PassangersText>
          <AdultsSelectWrapper>
            <AdlutText>Adults (Above 1 Year)</AdlutText>
            <InputWrapper>
              <ButtonNegative>
                <AiOutlineMinus onClick={decrement} />
              </ButtonNegative>
              <InputValue value={value} />
              <ButtonPositive>
                <AiOutlinePlus onClick={increment} />
              </ButtonPositive>
            </InputWrapper>
          </AdultsSelectWrapper>
          <InfantsSelectWrapper>
            <InfantsText>Infants (Below 12 months)</InfantsText>
            <InputWrapper>
              <ButtonNegative>
                <AiOutlineMinus onClick={decrement2} />
              </ButtonNegative>
              <InputValue value={value2} />
              <ButtonPositive>
                <AiOutlinePlus onClick={increment2} />
              </ButtonPositive>
            </InputWrapper>
          </InfantsSelectWrapper>
        </PasssangersWrapper>
        <SelectTripText>Select Trip(s)</SelectTripText>
        <FormMainContainer>
          <TripText>Trip 1</TripText>
          <hr style={{width:"65vmax",marginLeft:"13vmax",marginTop:"1vmax"}} />
          <FormContainer>
            <FromWrapper>
              <StyledText>From</StyledText>
              <FromSelect>
                <option>Port Blair</option>
                <option>HAVELOCK</option>
                <option>NEIL INSLAND</option>
              </FromSelect>
            </FromWrapper>
            <FromWrapper>
              <StyledText>To</StyledText>
              <FromSelect>
                <option>Port Blair</option>
                <option>HAVELOCK</option>
                <option>NEIL INSLAND</option>
              </FromSelect>
            </FromWrapper>
            <FromWrapper>
              <StyledText>Date of Journey</StyledText>
              <DateInput type="date" />
            </FromWrapper>
          </FormContainer>
        </FormMainContainer>
        {Array.from({ length: roundTrip }, (unused, index) => index + 1).map(
          (data) => {
            return (
              <>
                <FormMainContainer>
                  <IconWraper>
                  <TripText>Trip {data + 1}</TripText>
                  <CloseIcon onClick={handleClose}/>
                  </IconWraper>
                  <hr style={{width:"65vmax",marginLeft:"13vmax",marginTop:"1vmax"}} />
                  <FormContainer>
                    <FromWrapper>
                      <StyledText>From</StyledText>
                      <FromSelect>
                        <option>Port Blair</option>
                        <option>HAVELOCK</option>
                        <option>NEIL INSLAND</option>
                      </FromSelect>
                    </FromWrapper>
                    <FromWrapper>
                      <StyledText>To</StyledText>
                      <FromSelect>
                        <option>Port Blair</option>
                        <option>HAVELOCK</option>
                        <option>NEIL INSLAND</option>
                      </FromSelect>
                    </FromWrapper>
                    <FromWrapper>
                      <StyledText>Date of Journey</StyledText>
                      <DateInput type="date" />
                    </FromWrapper>
                  </FormContainer>
                </FormMainContainer>
              </>
            );
          }
        )}

        <AddTrip>
          <AiFillPlusCircle
            onClick={handleSet}
            style={{ color: "#145843", cursor: "pointer" }}
          />
          <AddTripText>ADD ROUND TRIP</AddTripText>
          <SearchButton>Search</SearchButton>
        </AddTrip>
      </MainContainer>
    </>
  );
};

export default FerryInputComponent;
