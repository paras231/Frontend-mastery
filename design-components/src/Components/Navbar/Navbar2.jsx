import React from "react";
import styles from "./nav.module.scss";
import vue from "../../assets/vue.svg";

const Navbar2 = () => {
  return (
    <>
      {/* not fixed navbar  */}
      <div className={styles.navcontainer}>
        {/* left nav */}
        <div className={styles.navwrapper}>
          <div className={styles.leftnav}>
            {/* logo here */}
            <div className={styles.logowrapper}>
              <img src={vue} alt="" />
              <span>Vue js</span>
            </div>
          </div>
          {/* right nav */}
          <div className={styles.rightnav}>
            <ul>
              <li>Docs</li>
              <li>API</li>
              <li>Playground</li>
              <li>Ecosystem</li>
              <li>About</li>
              <li>Sponsors</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;
