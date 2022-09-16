import React from "react";
import styles from "./hotelPaymentDetail.module.scss";
import hotelpic from "../../assets/hotelpic.png";
import {BsStarFill} from "react-icons/bs";


const HotelPaymentDetail = () => {
  return (
    <>
      {/* this page has been devided into two section  section one will be flex-3 and section two will be flex1 */}
      <section className={styles.mainContainer}>
        {/* section left here */}
        <section className={styles.leftMainSection}>
          <div className={styles.leftMainDiv1}>
            <p className={styles.infoText}>Hotel Info</p>
            <hr />
            <div className={styles.hotelInfo}>
              <img src={hotelpic} alt="hotel" />
              <div className={styles.infoDetail}>
                <div className={styles.starDiv}>
                <BsStarFill style={{color:"yellow"}}/>
                <BsStarFill style={{color:"yellow"}}/>
                <BsStarFill style={{color:"yellow"}}/>
                </div>
                <p className={styles.hotelName}></p>
              </div>
            </div>
          </div>
        </section>
        {/* section right here */}
        <section className={styles.rightMainSection}>
          <h1>Right section </h1>
        </section>
      </section>
    </>
  );
};

export default HotelPaymentDetail;
