import React from "react";
import netlify from "./assets/netlifylogo.png";
import { motion } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(!loading);
  }, 5000);
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10vmax",
          }}
        >
          <motion.div
          whileInView={{
           
            rotate: [180,-180,180],
            transition: { duration: 2.5},
            scale:1.5,
          }}
          >
            <img style={{ width: "5vw", height: "15vh" }} src={netlify} />
          </motion.div>
        </div>
      ) : (
        <>
          <h1>HELLO WORLD</h1>
        </>
      )}
    </>
  );
};

export default Loader;
