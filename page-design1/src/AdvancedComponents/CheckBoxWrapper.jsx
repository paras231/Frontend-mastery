import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainDiv = styled.div`
  width: 30vmax;
  background: red;
  height: 30vmax;
  padding: 5%;
  border:2px solid black;
  resize: both;
  overflow: auto;
  box-sizing: border-box; //give border box so that div height width does not increase after giving padding.
`;

const Wrapper = styled.div`
  width: 13vmax;
  margin-top: 2vmax;
  background-color: pink;
  display: flex;
  justify-content: space-evenly;
`;
const CheckBoxText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const CheckBoxWrapper = () => {
  const StyledCheckBox = styled.input``;
  return (
    <>
      <Container>
        <MainDiv>
          <Wrapper>
            <StyledCheckBox type="checkbox" />
            <CheckBoxText>Checkbox Text</CheckBoxText>
          </Wrapper>
          <Wrapper>
            <StyledCheckBox type="checkbox" />
            <CheckBoxText>Checkbox Text</CheckBoxText>
          </Wrapper>
          <Wrapper>
            <StyledCheckBox type="checkbox" />
            <CheckBoxText>Checkbox Text</CheckBoxText>
          </Wrapper>
        </MainDiv>
      </Container>
    </>
  );
};

export default CheckBoxWrapper;
