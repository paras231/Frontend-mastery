import React from "react";
import styles from "../styles/home.module.scss";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const Chat = () => {
  return (
    <>
      <div className={styles.chat}>
        <div className={styles.chatInfo}>
          <span>Jane</span>
          <div className={styles.chatIcons}>
            <AiOutlineVideoCamera className={styles.icon} />
            <AiOutlineUserAdd className={styles.icon} />
            <BiDotsHorizontalRounded className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
