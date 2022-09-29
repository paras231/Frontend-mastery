import React from "react";
import styled from "styled-components";
import Line from "../assets/line.png";
import FerryCard from "./FerryCard";
import FerryCheckbox from "./MobileView/FerryCheckbox";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const MainContainer = styled.div`
  display: flex;
  gap: 4vmax;
  margin-top: 10vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    padding: 10px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    padding: 10px;
  }
`;

const CheckBoxWrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2vmax;
  margin-left: 3vmax;
  margin-top: 6vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    display: none;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: none;
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 2vmax;
`;
const StyledCheckBox = styled.input`
  height: 1.2vmax;
  width: 1.5vmax;
  border: 3px solid #000000;
  border-radius: 5px;
`;
const MorningText = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;
const TimingText = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;

const StyledHeading = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  color: #145843;
  margin-left: 25%;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 45%;
  }
`;
const FerryMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 3vmax;
`;

const LineImage = styled.img`
  margin-top: 8vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    display: none;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: none;
  }
`;
const FerryLists = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
     {isMobile ? <FerryCheckbox /> : null}
      <MainContainer>
       
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
        <LineImage src={Line} />
        <FerryMainWrapper>
          <StyledHeading>Ferry</StyledHeading>

          <FerryCard />
        </FerryMainWrapper>
      </MainContainer>
    </>
  );
};

export default FerryLists;
