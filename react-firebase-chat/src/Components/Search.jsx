import React, { useState } from "react";
import styles from "../styles/home.module.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const Search = () => {
  const [userName, setUsrename] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      setErr(true);
      console.log(error);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const url =
    "https://images.unsplash.com/photo-1664374170305-31a1630b2038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
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
          <div className={styles.userChat}>
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
