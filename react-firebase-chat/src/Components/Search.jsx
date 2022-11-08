import React, { useContext, useState } from "react";
import styles from "../styles/home.module.scss";
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../Firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const { currentUser } = useContext(AuthContext);
  const [userName, setUsrename] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    console.log(userName);
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc);
        console.log(doc.id, " => ", doc.data(), "doc data here");
      });
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsrename("")
  };
  return (
    <>
      <div className={styles.search}>
        <div className={styles.searchForm}>
          <input
            type="text"
            placeholder="Find a user"
            onKeyDown={handleKey}
            onChange={(e) => setUsrename(e.target.value)}
            value={userName}
          />
        </div>
        {err && <span>User not found</span>}
        {user && (
          <div className={styles.userChat}  onClick={handleSelect}>
            <img src={user.photoURL} alt="" />
            <div className={styles.userchatInfo}>
              <span>{user.displayName}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
