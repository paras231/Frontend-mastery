import React, { useState } from "react";
import styles from "./mobilefooter.module.scss";

const MobileFooter = () => {
  const [url, setUrl] = useState("");
  console.log(url);

  return (
    <>
      <div className={styles.footer}>
        <center className={styles.heading}>Be Future Ready</center>
        <center>Get exclusive offer Updates straight to your inbox</center>
        <center>
          <div className={styles.emailinput}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email Address"
            />
          </div>
        </center>
        <center className={styles.gridwrapper}>
          <h3>Company</h3>
          <div className={styles.griddiv}>
            <span>Home</span>
            <span>About us</span>
            <span>Testimonials</span>
          </div>
        </center>
        <center className={styles.gridwrapper}>
          <h3>Resource</h3>
          <div className={styles.griddiv}>
            <span>Blogs</span>
            <span>Wedding us</span>
            <span>Privacy Policy</span>
          </div>
        </center>
        <center className={styles.gridwrapper}>
          <h3>Contact</h3>
          <div className={styles.griddiv}>
            <span>735-587-0078, 743-521-4678</span>
            <span>Wedding us</span>
            <span>Privacy Policy</span>
          </div>
        </center>
        <center className={styles.gridwrapper}>
          <h3>Address</h3>
          <div className={styles.griddiv}>
            <span>7716 Kerluke Burgs, 1856 Tilman Parkway</span>
          </div>
        </center>
      </div>
    </>
  );
};

export default MobileFooter;
