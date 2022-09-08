import React from "react";
import styled from "styled-components";
import computer1 from "../assets/computer1.png";
import computer2 from "../assets/computer2.png";
import hand from "../assets/hand.png";
import arrow from "../assets/arrow.png";
const MainContainer = styled.div`
  margin-top: 10vmax;
  width: 90%;
`;
const ProcessWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 10%;
  margin-top: 3vmax;
`;
const IconWraper = styled.div`
  display: grid;
  gap: 0.5vmax;

  height: 5vmax;
`;
const TextDiv1 = styled.div`
  width: 14vmax;
  margin-left: -3vmax;
`;
const TextDiv2 = styled.div`
  width: 19vmax;
  margin-left: -3vmax;
  margin-top: -5vmax;
`;
const TextDiv3 = styled.div`
  
  margin-left: -3vmax;
  margin-top:-1vmax;
  width:9vmax;
`;

const TextDiv4 = styled.div`
  width: 19vmax;
  margin-left: -3vmax;
  margin-top: -5vmax;
`;

const IconWrapper2 = styled.div`
  display: grid;
  gap: 3vmax;
  width: 16vmax;
  margin-left: 4vmax;
`;
const IconWrapper3 = styled.div`
  display: grid;
  gap: 1vmax;

  margin-left: 4vmax;
`;
const InconTextdark = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-left: -5.5vmax;
`;

const InconTextdark2 = styled.p`
  font-size: 1rem;
  font-weight: 700;
  margin-left: -12vmax;
  margin-top: -2.3vmax;
`;

const InconTextdark3 = styled.p`
  font-size: 1rem;
  font-weight: 700;

  margin-top: -1vmax;
  margin-left:-4vmax;
`;

const IconText = styled.p`
  font-size: 1rem;
`;
const IconText2 = styled.p`
  margin-right: 8vmax;
  margin-top:1vmax;
  font-size: 1rem;
`;
const ArrowImage = styled.img`
  width: 1vmax;
  height: 1.5vmax;
  margin-top: 3vmax;
`;
const IconImage1 = styled.img`
  width: 4vmax;
  height: 4vmax;
`;

const StyledHeading = styled.p`
  font-size: 1.5rem;
  color: #145843;
  font-weight: 600;
`;
const FerryBookingProcess = () => {
  return (
    <>
      <center>
        <MainContainer>
          <StyledHeading>Ferry Booking Process</StyledHeading>
          <ProcessWrapper>
            <IconWraper>
              <IconImage1 src={computer1} />
              <InconTextdark>Search</InconTextdark>
              <TextDiv1>
                <IconText>And compare ferries from a large selection</IconText>
              </TextDiv1>
            </IconWraper>
            <ArrowImage src={arrow} />
            <IconWrapper2>
              <IconImage1 src={computer2} />
              <InconTextdark2>Order</InconTextdark2>
              <TextDiv2>
                <IconText2>
                  Tickets by securely paying only ₹ 200 per ticket
                </IconText2>
              </TextDiv2>
            </IconWrapper2>
            <ArrowImage src={arrow} />
            <IconWrapper3>
              <IconImage1 src={hand} />
              <InconTextdark3>Receive</InconTextdark3>
              <TextDiv3>Your confirmed ticket in 3-4 working hours</TextDiv3>
            </IconWrapper3>
            <ArrowImage src={arrow} />
            <IconWrapper3>
              <IconImage1 src={hand} />
              <InconTextdark3>Receive</InconTextdark3>
              <TextDiv3>Your confirmed ticket in 3-4 working hours</TextDiv3>
            </IconWrapper3>
          </ProcessWrapper>
        </MainContainer>
      </center>
    </>
  );
};

export default FerryBookingProcess;
