import React from "react";
import styles from "./mobileCabBookForm.module.scss";

const MobilePackageBookForm = () => {
  return (
    <>
      <center className={styles.heading}>Traveller Information</center>
      <center className={styles.heading}>Trip Details</center>
      <div className={styles.cabbookform}>
        <form action="">
          <div className={styles.formwrapper}>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Adult-1</label>
              <input required type="text" placeholder="Enter Name" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Adult-2</label>
              <input required type="text" placeholder="Enter Name" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Email</label>
              <input required type="email" placeholder="Enter Email" />
            </div>

            <div className={styles.addresswrapper}>
              <label htmlFor="">Mobile</label>
              <input required type="text" placeholder="Enter Contact No." />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">City</label>
              <input required type="text" placeholder="Enter City" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Address</label>
              <input required type="text" placeholder="Enter Address" />
            </div>
            <button className={styles.paynow} type="submit">
              Book Now
            </button>
            <button className={styles.paynow}>Proceed To Pay</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MobilePackageBookForm;
