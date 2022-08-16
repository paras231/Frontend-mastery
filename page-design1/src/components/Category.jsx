import React from "react";
import styled from "styled-components";
import fruit1 from "../assets/fruit1.png";
import white from "../assets/white.png";
import { motion } from "framer-motion";

const CategoryContainer = styled.div`
  display: grid;
  margin-top: 20vh;
`;

const MainDiv = styled.div`
  display: flex;
  margin-left: 20vw;
  gap: 20px;
  @media (min-width: 320px) and (max-width: 375px) {
    display: grid;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    display: grid;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    display: grid;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    display: grid;
  }
`;

const StyledHeading = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  color: #000000;
  margin-left: 20vw;
`;

const ImageText = styled.div`
  margin-top: 5vh;
  display: flex;
  gap: 20px;
  width: 15vw;
  height: 10vh;
  background-color: rgba(29, 47, 80, 1);
  border-radius: 10px;
  :hover {
    box-shadow: 15px -8px 47px -8px rgba(199, 141, 199, 1);
  }
  @media (min-width: 320px) and (max-width: 375px) {
    width: 55vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 55vw;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 55vw;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 55vw;
  }
`;
const Image = styled.img`
  margin-top: 7px;
  width: 4vw;
  height: 7vh;
  margin-left: 6px;

  @media (min-width: 320px) and (max-width: 375px) {
    width: 15vw;
  }
  @media (min-width: 376px) and (max-width: 420px) {
    width: 15vw;
  }
  @media (min-width: 421px) and (max-width: 480px) {
    width: 15vw;
  }
  @media (min-width: 481px) and (max-width: 560px) {
    width: 15vw;
  }
`;

const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 34px;
  text-align: center;

  margin-top: 15px;
  color: #ffffff;
`;
const Category = () => {
  return (
    <>
      <CategoryContainer>
        <StyledHeading>Categories</StyledHeading>
        <MainDiv>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <ImageText>
              <motion.div
                whileInView={{
                  rotate: [0, 360],
                  transition: { duration: 2, ease: "easeInOut" },
                }}
              >
                <Image src={fruit1} alt="fruit1" />
              </motion.div>
              <Text>Fruits</Text>
            </ImageText>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <ImageText>
              <Image src={fruit1} alt="fruit1" />
              <Text>Fruits</Text>
            </ImageText>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <ImageText>
              <Image src={fruit1} alt="fruit1" />
              <Text>Fruits</Text>
            </ImageText>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
            }}
          >
            <ImageText>
              <Image src={fruit1} alt="fruit1" />
              <Text>Fruits</Text>
            </ImageText>
          </motion.div>
        </MainDiv>
      </CategoryContainer>
    </>
  );
};

export default Category;
