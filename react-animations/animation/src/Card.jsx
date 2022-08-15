import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const MainDiv = styled.div`
  display: grid;
  gap: 10rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CardDiv = styled.div`
  display: grid;
  box-shadow: 4px 32px 92px -12px rgba(0, 0, 0, 0.75);
`;
const Image = styled.img`
  width: 30vw;
  height: 40vh;
  border-radius: 10px;
`;
const Card = () => {
  return (
    <>
      <center>
        <MainDiv>
          <motion.div
            whileHover={{
              opacity: 0,
            transition: { duration: 1.5 },
            }}
          >
            <CardDiv>
              <Image src="https://images.unsplash.com/photo-1657299170240-a1f811379b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </CardDiv>
          </motion.div>
          <motion.div
            whileInView={{
              x: -40,
              transition: {
                duration: 3,
              },
            }}
          >
            <CardDiv>
              <Image src="https://images.unsplash.com/photo-1657299170240-a1f811379b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
            </CardDiv>
          </motion.div>
          <CardDiv>
            <Image src="https://images.unsplash.com/photo-1657299170240-a1f811379b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          </CardDiv>
          <CardDiv>
            <Image src="https://images.unsplash.com/photo-1657299170240-a1f811379b57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          </CardDiv>
        </MainDiv>
      </center>
    </>
  );
};

export default Card;
