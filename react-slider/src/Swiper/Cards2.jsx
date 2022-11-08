import React from "react";
import styles from "./cards2.module.css";
import ship from "../assets/shipt.png";

const Cards2 = () => {
  return (
    <>
      <div className={styles.mainwrapper}>
        <div className={styles.cardwrapper}>
          <div className={styles.cardtop}>
            <img className={styles.cardimg} src={ship} alt="" />
          </div>
          <div className={styles.cardbottom}>
            <p className={styles.location}>Port Blair</p>
            <span className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, ipsa.
              Fuga repellat voluptas reprehenderit esse. Maxime, quos dolores
              incidunt ab magnam vel fugit nam earum mollitia placeat distinctio
              officia doloremque.
            </span>
            <div className={styles.pricerating}>
              <span>Rating</span>
              <span>$500</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards2;
