import React,{useState} from "react";
import DatePicker from "react-datepicker";
import styles from "./bannerinput.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const BannerInput = () => {

  const [startDate, setStartDate] = useState(new Date());
 
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.inputContainer}>
          <div className={styles.inputTextWrapper}>
            <span>From</span>
            <input type="text" defaultValue="Port Blair" />
          </div>
          <div className={styles.inputTextWrapper}>
            <span>To</span>
            <input type="text" defaultValue="Ross Garden" />
          </div>
          <div className={styles.datepicker}>
            <span>Pick-up-date</span>
            <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            </div>
           
          </div>
          <div className={styles.inputTextWrapper}>
          <span>Pick-up-Time</span>
        <input type="text" defaultValue="2:40 AM"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerInput;
