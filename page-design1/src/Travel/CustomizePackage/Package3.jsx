import React from "react";
import styles from "./package1.module.scss";
import { useNavigate } from "react-router-dom";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/greyline.png";
import close from "../../assets/close.png";
import adventure from "../../assets/adventure.png";
import artist from "../../assets/artist.png";

const Package3 = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <span className={styles.planning}>Planning Your Trip To</span>
        <div className={styles.iconTextwrapper}>
          <p className={styles.andman}>Andman</p>
          <img src={close} alt="" />
        </div>

        <div className={styles.lineContainer}>
          <img src={greenline} alt="line" />
          <img src={greenline} alt="line" />
          <img src={greenline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
        </div>
        <center className={styles.when}>
          <span>What do you like to see and do?</span>
        </center>

        <div className={styles.travelContainer}>
          <div className={styles.travelCard}>
            <img src={adventure} alt="" />
            <p>Adventure & Outdoor</p>
          </div>
          <div className={styles.travelCard}>
          <img src={adventure} alt="" />
            <p>Art & Culture</p>
          </div>
          <div className={styles.travelCard}>
          <img src={adventure} alt="" />
            <p>Art & Culture</p>
          </div>
          <div className={styles.travelCard}>
          <img src={adventure} alt="" />
            <p>Art & Culture</p>
          </div>
          <div className={styles.travelCard}>
          <img src={adventure} alt="" />
            <p>Art & Culture</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package3;
