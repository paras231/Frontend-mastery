import React from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  const url =
    "https://images.unsplash.com/photo-1664374170305-31a1630b2038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.logo}>React Chat</span>
        <div className={styles.user}>
          <img src={url} alt="" />
          <span>Jhon</span>
          <button>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
