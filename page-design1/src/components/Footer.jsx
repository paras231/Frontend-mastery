import React from "react";
import { useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import footerbg from "../assets/footerbg.png";
import { FiArrowRight } from "react-icons/fi";
import "./Footer.css";
const MainDiv = styled.div`
  margin-top: 20px;
  background: url(${footerbg});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

const FutureText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Poppins;
`;
const Para = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  font-family: Poppins;
`;
const Container = styled.div`
  margin-top: 30px;
  /* height: 75vmax; */
  position: absolute;
  /* background: black; */
  margin-left: 10px;
  margin-right: 10px;
`;
const ListWrapper = styled.div`
  display: grid;
  cursor: pointer;
  font-size: 20px;
`;

const Text1 = styled.p`
  margin-left: 10px;
`;
const Text2 = styled.p`
  margin-left: 10px;
`;
const Text3 = styled.p`
  margin-left: 40px;
`;
const Text4 = styled.p`
  margin-left: 40px;
`;
const Number = styled.p``;
const Address = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: Poppins;
  margin-left: 30px;
`;
const Privacy = styled.p``;
const ListWrapper2 = styled.div`
  padding-right: 25px;
  display: grid;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Input = styled.input`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #424242;
    padding-left: 14px;
  }
  border: 2px solid #0da274;
  height: 35px;
`;

const Button = styled.button`
  width: 4vmax;
  height: 4vmax;
  color: white;
  background-color: #0da274;
  border: none;
  outline: none;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 375px) {
    height: 32px;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    height: 24px;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    height: 24px;
  }
`;

const Copyright = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  /* margin-top: 5vmax; */
`;

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const copyRef = React.useRef();

  React.useEffect(() => {
    copyRef.current.style.display = "none";
  });

  return (
    <>
      <MainDiv>
        <center>
          <Container>
            <FutureText>Be Future Ready</FutureText>
            <Para>Get exclusive offer updates straight to your inbox.</Para>
            <center>
              <InputWrapper>
                <Input
                  className="input-tab"
                  type="email"
                  placeholder="Email Address"
                />
              </InputWrapper>
            </center>
            <Accordion sx={{ marginTop: "8vh" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p style={{ fontWeight: "bold" }}>Company</p>
              </AccordionSummary>
              <AccordionDetails>
                <ListWrapper>
                  <p>Home</p>
                  <Text1>About Us</Text1>
                  <Text2>Testimonials</Text2>
                </ListWrapper>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p style={{ fontWeight: "bold" }}>Resources</p>
              </AccordionSummary>
              <AccordionDetails>
                <ListWrapper>
                  <p>Blog</p>
                  <Text3>Wedding</Text3>
                  <Text4>Privacy Policy</Text4>
                </ListWrapper>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <p style={{ fontWeight: "bold" }}>Contact Us</p>
              </AccordionSummary>
              <AccordionDetails>
                <ListWrapper2>
                  <Number>735-587-0078, 743-521-4678</Number>
                  <Address>Address</Address>
                  <Privacy>7716 Kerluke Burgs, 1856 Tillman Parkway</Privacy>
                </ListWrapper2>
              </AccordionDetails>
            </Accordion>
            <Copyright ref={copyRef}>
              Copyright @ 2022. All Rights Reserved
            </Copyright>
          </Container>
        </center>
      </MainDiv>
    </>
  );
};

export default Footer;
