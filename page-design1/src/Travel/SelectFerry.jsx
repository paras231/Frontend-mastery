import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vmax;
`;
const SliderWrapper = styled.div``;
const SelectSeatText = styled.p``;
const SeatWrapper = styled.div`
  display: flex;
  gap: 3vmax;
`;
const Economy = styled.div`
  display: flex;
  gap: 2vmax;
`;

const SliderDiv = styled.div``;
const SelectFerry = () => {
  
  return (
    <>
      <MainWrapper >
        <SliderWrapper>
          <SelectSeatText>
            Select ferry
            <button>Close</button>
          </SelectSeatText>
        </SliderWrapper>
      </MainWrapper>
    </>
  );
};

export default SelectFerry;
