import React, { useContext } from "react";
import styles from "../styles/navbar.module.scss";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className={styles.navbar}>
        <span className={styles.logo}>React Chat</span>
        <div className={styles.user}>
          <img src={currentUser.photoURL} alt="url" />
          <span>{currentUser.displayName}</span>
          <button onClick={() => signOut(auth)}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
