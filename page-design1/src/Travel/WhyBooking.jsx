import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display:flex;
justify-content:space-between;
`;
const StyledHeading = styled.p`
  font-size: 1.5rem;
  color: #145843;
  font-weight: 600;
  margin-top:10vmax;
`;

const Wrapper1 = styled.div`
display: flex;
flex-direction: column;
`
const Wrapper2 = styled.div`
display: flex;
flex-direction: column;
`

const WhyBooking = () => {
  return (
    <>
      <center>
        <StyledHeading>Why Booking With Us</StyledHeading>
      </center>
    </>
  );
};

export default WhyBooking;
