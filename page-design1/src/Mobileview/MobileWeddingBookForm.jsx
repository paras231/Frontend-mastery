import React from "react";
import styles from "./mobileCabBookForm.module.scss";

const MobileWeddingBookForm = () => {
  return (
    <>
      <center className={styles.heading}>Book Wediing Form</center>
      <div className={styles.cabbookform}>
        <form action="">
          <div className={styles.formwrapper}>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Groom</label>
              <input required type="text" placeholder="Enter Groom Name" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Bride</label>
              <input required type="text" placeholder="Enter Bride Name" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Email</label>
              <input required type="email" placeholder="Enter Email" />
            </div>

            <div className={styles.addresswrapper}>
              <label htmlFor="">Address</label>
              <input required type="text" placeholder="Enter Address" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Mobile</label>
              <input required type="text" placeholder="Enter Mobile No." />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Arrival Date</label>
              <input required type="text" placeholder="Enter Date" />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Departure Date</label>
              <input required type="text" placeholder="Enter Date" />
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

export default MobileWeddingBookForm;
