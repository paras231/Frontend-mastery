import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled.div`
  width: 30vw;
  height: 30vh;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20vh;
`;
const Test1 = () => {
  return (
    <>
      <center>
        <motion.h1
          initial={{ opacity: 0.5 }}
          whileInView={{
            y: 200,
            opacity: 0,
            transition: { duration: 3, ease: "easeInOut" },
          }}
        >
          This is a subtitle
        </motion.h1>
      </center>
      <motion.div
        whileInView={{
          x: [0, -100, 0],
          y: [0, -100, 0],
        }}
      >
        <center>
          <Box>
            <p>Box</p>
          </Box>
        </center>
      </motion.div>
      <center>
        <Box>
          <p>Box</p>
        </Box>
      </center>
      <center>
        <Box>
          <p>Box</p>
        </Box>
      </center>
      <motion.div
        initial={{
          opacity: 0,
          x: 0,
        }}
        whileInView={{
          opacity: 1,
          x: [0, -100, 0],
          transition: {
            duration: 1.5,
            type: "spring",
            stiffness: 100,
          },
        }}
      >
        <center>
          <Box>
            <motion.div
              whileInView={{
                x: [0, -100, 0],

                transition: {
                  duration: 1.5,
                },
              }}
            >
              <p>Box</p>
            </motion.div>
          </Box>
        </center>
      </motion.div>
    </>
  );
};

export default Test1;
