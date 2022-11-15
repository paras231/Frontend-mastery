import React from "react";
import styles from "./mobilesearchoption.module.scss";
import { MdLocationOn } from "react-icons/md";

const MobileSearchOption = () => {
  return (
    <>
      <div className={styles.mainwrapper}>
        <div className={styles.locationwrapper}>
          <MdLocationOn className={styles.locationIcon} />
          <select name="" id="" className={styles.select}>
            <option value="">Port Blair</option>
            <option value="">Havelock</option>
            <option value="">Swaraj Dweep</option>
            <option value="">Cellular Jail</option>
            <option value="">Chidiya Tapu</option>
          </select>
        </div>
        <div className={styles.locationwrapper}>
          <MdLocationOn className={styles.locationIcon} />
          <select name="" id="" className={styles.select}>
            <option value="">Port Blair</option>
            <option value="">Havelock</option>
            <option value="">Swaraj Dweep</option>
            <option value="">Cellular Jail</option>
            <option value="">Chidiya Tapu</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default MobileSearchOption;
