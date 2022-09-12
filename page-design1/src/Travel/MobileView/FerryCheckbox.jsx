import React from "react";
import styled from "styled-components";

const CheckBoxWrapperMain = styled.div`
  display: flex;

  gap: 20vw;

  margin-top: 6vmax;

`;

const CheckBoxWrapper = styled.div`
  display: flex;
`;
const StyledCheckBox = styled.input`
  height: 10vh;
  width: 15vw;
  border: 3px solid #000000;
  border-radius: 5px;
`;
const MorningText = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
const TimingText = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`;
const FerryCheckbox = () => {
  return (
    <>
      <center>
        <CheckBoxWrapperMain>
          <TimingText>Timing:</TimingText>
          <CheckBoxWrapper>
            <StyledCheckBox type="checkbox" />
            <MorningText>Morning to Evening</MorningText>
          </CheckBoxWrapper>
          <CheckBoxWrapper>
            <StyledCheckBox type="checkbox" />
            <MorningText>Evening to Morning</MorningText>
          </CheckBoxWrapper>
        </CheckBoxWrapperMain>
      </center>
    </>
  );
};

export default FerryCheckbox;
