import React from "react";
import styles from "../styles/home.module.scss";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <Navbar />
        <Search/>
        <Chats/>
      </div>
    </>
  );
};

export default Sidebar;
