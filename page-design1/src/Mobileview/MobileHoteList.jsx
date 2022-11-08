import React from "react";
import styles from "./mobilehotelList.module.scss";
import hotel from "../assets/hotelmobile.png";
import {MdOutlineKeyboardBackspace} from "react-icons/md"

const MobileHoteList = () => {
  return (
    <>  
      <div className={styles.searchwrapper}>
       <div className={styles.searchinput}>
        <div className={styles.inputwrapper}>
        <MdOutlineKeyboardBackspace/>
        <input type="text" placeholder="Jaipur" />
        </div>
       </div>
      </div>
      <div className={styles.maincontainer}>
        <div className={styles.cardwrapper}>
          <div className={styles.cardtop}>
            <img src={hotel} alt="" className={styles.img} />
          </div>
          <div className={styles.cardbottom}>
            <p className={styles.name}>Hotel Name</p>
            <div className={styles.desc}>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                saepe, deserunt harum cupiditate hic eum! Neque, est dolorum!
                Provident placeat eaque incidunt laborum consequuntur animi id
                voluptate quia a quidem?
              </span>
            </div>
          </div>
        </div>
        <div className={styles.cardwrapper}>
          <div className={styles.cardtop}>
            <img src={hotel} alt="" className={styles.img} />
          </div>
          <div className={styles.cardbottom}>
            <p className={styles.name}>Hotel Name</p>
            <div className={styles.desc}>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                saepe, deserunt harum cupiditate hic eum! Neque, est dolorum!
                Provident placeat eaque incidunt laborum consequuntur animi id
                voluptate quia a quidem?
              </span>
            </div>
          </div>
        </div>
        <div className={styles.cardwrapper}>
          <div className={styles.cardtop}>
            <img src={hotel} alt="" className={styles.img} />
          </div>
          <div className={styles.cardbottom}>
            <p className={styles.name}>Hotel Name</p>
            <div className={styles.desc}>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
                saepe, deserunt harum cupiditate hic eum! Neque, est dolorum!
                Provident placeat eaque incidunt laborum consequuntur animi id
                voluptate quia a quidem?
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHoteList; 
