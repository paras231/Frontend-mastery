import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import styles from "../styles/home.module.scss";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
const Chats = () => {
  const { currentUser } = useContext(AuthContext);
  const [chats, setChats] = useState([]);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats)); // convert object in


  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <>
      <div className={styles.chats}>
        {Object.entries(chats)?.map((chat) => (
          <div
            className={styles.userChat}
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className={styles.userchatInfo}>
              <span>{chat[1].userInfo.displayName}</span>
              <p>{chat[1].userInfo.lastMessage?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chats;
