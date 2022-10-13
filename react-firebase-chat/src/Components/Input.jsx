import React from "react";
import styles from "../styles/home.module.scss";
import { BiImage } from "react-icons/bi";
import { GrAttachment } from "react-icons/gr";
const Input = () => {
  return (
    <>
      <div className={styles.input}>
        <input type="text" placeholder="Type Something..." />
        <div className={styles.send}>
          <GrAttachment />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <BiImage />
          </label>
          <button>Send</button>
        </div>
      </div>
    </>
  );
};

export default Input;
