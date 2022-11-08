import React,{useContext} from "react";
import styles from "../styles/home.module.scss";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { ChatContext } from "../context/ChatContext";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <>
      <div className={styles.chat}>
        <div className={styles.chatInfo}>
          <span>{data.user?.displayName}</span>
          <div className={styles.chatIcons}>
            <AiOutlineVideoCamera className={styles.icon} />
            <AiOutlineUserAdd className={styles.icon} />
            <BiDotsHorizontalRounded className={styles.icon} />
          </div>
        </div>
        <Messages />
        <Input />
      </div>
    </>
  );
};

export default Chat;
