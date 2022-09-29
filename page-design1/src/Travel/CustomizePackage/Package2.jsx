import React from "react";
import styles from "./package1.module.scss";
import { useNavigate } from "react-router-dom";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/greyline.png";
import close from "../../assets/close.png";
import manshopping from "../../assets/manshopping.png";

const Package2 = () => {
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
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
        </div>
        <center className={styles.when}>
          <span>What’s the duration of your holiday?</span>
        </center>

        <div className={styles.shoppingContainer}>
          <div className={styles.shoppingCard}>
            <img src={manshopping} alt="man" />
            <p>3-4 Days</p>
          </div>
          <div
            className={styles.shoppingCard}
            onClick={() => handleNavigate("/package3")}
          >
            <img src={manshopping} alt="man" />
            <p>6-8 Days</p>
          </div>
          <div className={styles.shoppingCard}>
            <img src={manshopping} alt="man" />
            <p>9-11 Days</p>
          </div>
          <div className={styles.shoppingCard}>
            <img src={manshopping} alt="man" />
            <p>12-15 Days</p>
          </div>
        </div>
        <input type="file" id="file" />
        <label htmlFor=""></label>
      </div>
    </>
  );
};

export default Package2;
