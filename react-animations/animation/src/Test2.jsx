import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
const Line = styled.div`
  width: 30vw;
  height: 4vh;
  background-color: red;
`;

const Test2 = () => {
  return (
    <>
      <motion.div
        animate={{
          x: 320,
        }}
        whileTap={{
          y: 200,
        }}
      >
        <svg
          style={{ marginBottom: "-12px", overflow: "hidden" }}
          height="100"
          width="100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="3"
            fill="red"
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </motion.div>
      <Line></Line>
    </>
  );
};

export default Test2;
