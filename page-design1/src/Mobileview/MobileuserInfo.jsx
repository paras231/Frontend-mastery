import React from "react";
import styles from "./mobileCabBookForm.module.scss";
import user from "../assets/user.svg";

const MobileuserInfo = () => {
  return (
    <>
      <center className={styles.heading}>User Info</center>
      <center>
        <img src={user} alt="" />
      </center>
      <center>
        <p className={styles.username}>Kane Williomson</p>
      </center>
      <center>
        <p className={styles.usercity}>Salt Lake City</p>
      </center>
      <div className={styles.cabbookform}>
        <form action="">
          <div className={styles.formwrapper}>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Email</label>
              <input
                required
                type="email"
                placeholder="Enter Name"
                defaultValue="kane@gmail.com"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Phone Number</label>
              <input
                required
                type="text"
                placeholder="Enter Name"
                defaultValue="123456789"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">User Id</label>
              <input
                required
                type="email"
                placeholder="Enter Email"
                defaultValue="sam@234"
              />
            </div>

            <div className={styles.addresswrapper}>
              <label htmlFor="">Password</label>
              <input
                required
                type="password"
                placeholder="Enter Password"
                defaultValue="123456"
              />
            </div>
            <div className={styles.addresswrapper}>
              <label htmlFor="">Postal Code</label>
              <input
                required
                type="text"
                placeholder="Code"
                defaultValue="305023"
              />
            </div>
            <div className={styles.savebtnDiv}>
              <button className={styles.paynow} type="submit">
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MobileuserInfo;
