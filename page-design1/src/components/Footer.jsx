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
const MainDiv = styled.div`
  margin-top: 10vmax;
  background: url(${footerbg});
  background-repeat: no-repeat;
  height: 90vmax;
  width: 100%;
`;

const FutureText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-family: Poppins;
`;
const Para = styled.p`
  font-size: 0.8rem;
  font-weight: normal;
  font-family: Poppins;
`;
const Container = styled.div`
  margin-top: 8vmax;
  height: 75vmax;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  width: 90%;
  margin-left: 2vmax;
`;
const ListWrapper = styled.div`
  margin-left: -45vmax;
  display: grid;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: -33vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: -35vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    margin-left: -42vmax;
  }
`;

const Text1 = styled.p`
  margin-left: 3vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 2vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 2vmax;
  }
`;
const Text2 = styled.p`
  margin-left: 5vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 4vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 4vmax;
  }
`;
const Text3 = styled.p`
  margin-left: 7vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 6vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 5vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    margin-left: 5.5vmax;
  }
`;
const Text4 = styled.p`
  margin-left: 9vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 8vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 7vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    margin-left: 6vmax;
  }
`;
const Number = styled.p`
  margin-left: 18vmax;
`;
const Address = styled.p`
  font-size: 1rem;
  font-weight: bold;
  font-family: Poppins;
  margin-left: -2vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 2vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 4vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    margin-left: 3vmax;
  }
`;
const Privacy = styled.p`
  margin-left: 32vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 28vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 28vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    margin-left: 28vmax;
  }
`;
const ListWrapper2 = styled.div`
  margin-left: -40vmax;
  display: grid;
  cursor: pointer;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: -33vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: -35vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    margin-left: -42vmax;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  margin-left: 15vmax;
  margin-top: 5vmax;
  @media (min-width: 320px) and (max-width: 375px) {
    margin-left: 10vmax;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    margin-left: 10vmax;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    margin-left: 15vmax;
  }
`;

const Input = styled.input`
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #424242;
    padding-left: 14px;
  }
  border: 2px solid #0da274;
`;

const Button = styled.button`
  width: 4vmax;
  height: 3vmax;
  color: white;
  background-color: #0da274;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Copyright = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 5vmax;
`;

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? (
        <MainDiv>
          <center>
            <Container>
              <FutureText>Be Future Ready</FutureText>
              <Para>Get exclusive offer updates straight to your inbox.</Para>
              <center>
                <InputWrapper>
                  <Input type="email" placeholder="Email Address" />
                  <Button>
                    <FiArrowRight />
                  </Button>
                </InputWrapper>
              </center>
              <Accordion sx={{ marginTop: "5vmax" }}>
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
                    <Text3>News Letter</Text3>
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
              <Copyright>Copyright @ 2022. All Rights Reserved</Copyright>
            </Container>
          </center>
        </MainDiv>
      ) : null}
    </>
  );
};

export default Footer;
