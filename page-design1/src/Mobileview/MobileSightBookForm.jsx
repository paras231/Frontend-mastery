import React from "react";
import styles from "./mobileCabBookForm.module.scss";

const MobileSightBookForm = () => {
  return (
    <>
      <center className={styles.heading}>Book Your Sight</center>
      <div className={styles.cabbookform}>
        <form action="">
          <div className={styles.formwrapper}>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Number of People</label>
              <input required type="text" placeholder="2- 20" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Name</label>
              <input required type="text" placeholder="Enter  Name" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Email</label>
              <input required type="email" placeholder="Enter Email" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Mobile</label>
              <input required type="email" placeholder="Enter Mobile" />
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

export default MobileSightBookForm;
