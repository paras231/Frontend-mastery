import React from "react";
import Chat from "../Components/Chat";
import Sidebar from "../Components/Sidebar";
import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.container}>
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
