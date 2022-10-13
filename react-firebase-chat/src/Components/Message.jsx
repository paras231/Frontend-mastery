import React from "react";
import styles from "../styles/home.module.scss";

const Message = () => {
  return (
    <>
      <>
        <div className={`${styles.message}  ${styles.owner}`}>
          <div className={styles.messageInfo}>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <span>Just Now</span>
          </div>
          <div className={styles.messageContent}>
            <p>hello</p>
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
        </div>
      </>
    </>
  );
};

export default Message;
