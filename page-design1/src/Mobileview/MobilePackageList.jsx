import React from "react";
import styles from "./mobilepackageList.module.scss";
import packageimg from "../assets/packageimage.png";
import cabicon from "../assets/cabicon.svg";
import ferryicon from "../assets/ferryicon.svg";
import hotelicon from "../assets/hotelicon.svg";
import scuba from "../assets/scubaicon.svg";
import shipicon from "../assets/shipicon.svg";
import location from "../assets/Location.svg";

const MobilePackageList = () => {
  return (
    <>
      <div className={styles.packagewrapper}>
        <div className={styles.cardwrapper}>
          <div className={styles.cardtop}>
            <img src={packageimg} alt="package" />
          </div>
          <div className={styles.cardbottom}>
            <div className={styles.iconswrapper}>
              <div className={styles.hotelicon}>
                <img src={hotelicon} alt="hotel" />
                <span>7 Hotels</span>
              </div>
              <div className={styles.hotelicon}>
                <img src={cabicon} alt="hotel" />
                <span>4 Cabs</span>
              </div>
              <div className={styles.hotelicon}>
                <img src={ferryicon} alt="hotel" />
                <span>5 Ferries</span>
              </div>
              <div className={styles.hotelicon}>
                <img src={shipicon} alt="hotel" />
                <span>6 Cruise</span>
              </div>
              <div className={styles.hotelicon}>
                <img src={scuba} alt="hotel" />
                <span>2 Activities</span>
              </div>
            </div>
            <span className={styles.packagename}>Package Name</span>
            <div className={styles.location}>
              <img src={location} alt="" />
              <p className={styles.locationname}>Port Blair</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobilePackageList;
