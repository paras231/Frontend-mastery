import React from "react";
import styles from "./package1.module.scss";
import greenline from "../../assets/greenline.png";
import greyline from "../../assets/greyline.png";
import close from "../../assets/close.png";
import sun from "../../assets/Sun.png";
import { useNavigate } from "react-router-dom";

const Package1 = () => {
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
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
          <img src={greyline} alt="line" />
        </div>
        <center className={styles.when}>
          <span>When are you travelling to Port Blair</span>
        </center>

        <div className={styles.monthCOntainer}>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Sept</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 29 Degree</span>
            </div>
          </div>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Sept</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 29 Degree</span>
            </div>
          </div>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Sept</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 29 Degree</span>
            </div>
          </div>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Sept</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 29 Degree</span>
            </div>
          </div>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Sept</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 29 Degree</span>
            </div>
          </div>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Sept</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 29 Degree</span>
            </div>
          </div>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Sept</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 29 Degree</span>
            </div>
          </div>
          <div
            className={styles.monthCard}
            onClick={() => handleNavigate("/package2")}
          >
            <p>Sept</p>
            <button>Second Best</button>
            <div className={styles.weatherText}>
              <img src={sun} alt="sun" />
              <span>23 / 29 Degree</span>
            </div>
          </div>
          <div className={styles.textwrapper}>
            Issue of online vouchers are restricted for departure within the
            next 9 months. If you are planning for a later date, contact us
          </div>
        </div>
      </div>
    </>
  );
};

export default Package1;
