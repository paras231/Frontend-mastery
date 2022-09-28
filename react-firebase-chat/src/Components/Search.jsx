import React from "react";
import styles from "../styles/home.module.scss";

const Search = () => {
  const url =
    "https://images.unsplash.com/photo-1664374170305-31a1630b2038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.search}>
        <div className={styles.searchForm}>
          <input type="text" placeholder="Find a user" />
        </div>
        <div className={styles.userChat}>
          <img src={url} alt="" />
          <div className={styles.userchatInfo}>
            <span>Jane</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
