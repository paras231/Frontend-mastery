import React from "react";
import styles from "./mobileCabBookForm.module.scss";

const MobileCabBookForm = () => {
  return (
    <>
      <center className={styles.heading}>Trip Details</center>
      <div className={styles.cabbookform}>
        <form action="">
          <div className={styles.formwrapper}>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Pick-Up Address</label>
              <input required type="text" placeholder="Enter Pick Up address" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Drop-off Address</label>
              <input
                required
                type="text"
                placeholder="Enter Drop-off address"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Full Name</label>
              <input required type="text" placeholder="Enter Full Name" />
            </div>
            <div className={styles.genderwrapper}>
              <label htmlFor="">Gender</label>
              <div className={styles.radiowrapper}>
                <div className={styles.malewrapper}>
                  <span>Male</span>
                  <input required type="radio" />
                </div>
                <div className={styles.malewrapper}>
                  <span>Female</span>
                  <input required type="radio" />
                </div>
              </div>
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Email id</label>
              <input required type="text" placeholder="Enter Email" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Contact Number</label>
              <input required type="text" placeholder="Enter Contact No." />
            </div>
            <div className={styles.savebtnDiv}>
              <button className={styles.paynow} type="submit">
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MobileCabBookForm;
