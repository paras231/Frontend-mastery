import React from "react";
import styles from "./mobileHotelBookingForm.module.scss";

const MobileHotelBookForm = () => {
  return (
    <>
      <center className={styles.heading}>Guest Details</center>
      <div className={styles.hotelbookform}>
        <form action="">
          <div className={styles.formwrapper}>
            <div className={styles.genderwrapper}>
              <label htmlFor="">Title</label>
              <select name="" id="" className={styles.selectgen}>
                <option value="">Mr</option>
                <option value="">Mrs</option>
              </select>
            </div>
            <div className={styles.namewrapper}>
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="Frist Name" />
            </div>
            <div className={styles.namewrapper}>
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className={styles.namewrapper}>
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Email" />
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

export default MobileHotelBookForm;
