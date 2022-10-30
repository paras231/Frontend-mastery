import React from "react";
import styles from "./review.module.scss";
import { BsStarFill } from "react-icons/bs";
import rev1 from "../../assets/rev1.png";

const Review = () => {
  return (
    <>
      <center className={styles.centertext}>User Ratings & Reviews</center>
      <div className={styles.reviewmain}>
        <div className={styles.revwrapper}>
          <div className={styles.revcard}>
            <div className={styles.uppersection}>
              <img src={rev1} alt="" />
              <div className={styles.icontext}>
                <p>BILLY BOLEY</p>
                <span>Nake Mountain</span>
                <div className={styles.stardiv}>
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
            <div className={styles.lowersection}>
              <p>
                Leo risus ac cras sem aliquet eget vitae suspendisse. Bibendum
                placerat tortor eget duis. Euismod in euismod augue dui justo,
                lorem ut eget leo. Praesent elementum urna mauris, turpis
                feugiat enim. Platea odio aliquam quam etiam facilisis. Aliquet
                pellentesque mauris dictum egestas. Elit at non sed in proin
                facilisis aliquam pellentesque.
              </p>
            </div>
          </div>
          <div className={styles.revcard}>
            <div className={styles.uppersection}>
              <img src={rev1} alt="" />
              <div className={styles.icontext}>
                <p>BILLY BOLEY</p>
                <span>Nake Mountain</span>
                <div className={styles.stardiv}>
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
            <div className={styles.lowersection}>
              <p>
                Leo risus ac cras sem aliquet eget vitae suspendisse. Bibendum
                placerat tortor eget duis. Euismod in euismod augue dui justo,
                lorem ut eget leo. Praesent elementum urna mauris, turpis
                feugiat enim. Platea odio aliquam quam etiam facilisis. Aliquet
                pellentesque mauris dictum egestas. Elit at non sed in proin
                facilisis aliquam pellentesque.
              </p>
            </div>
          </div>
          <div className={styles.revcard}>
            <div className={styles.uppersection}>
              <img src={rev1} alt="" />
              <div className={styles.icontext}>
                <p>BILLY BOLEY</p>
                <span>Nake Mountain</span>
                <div className={styles.stardiv}>
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                </div>
              </div>
            </div>
            <div className={styles.lowersection}>
              <p>
                Leo risus ac cras sem aliquet eget vitae suspendisse. Bibendum
                placerat tortor eget duis. Euismod in euismod augue dui justo,
                lorem ut eget leo. Praesent elementum urna mauris, turpis
                feugiat enim. Platea odio aliquam quam etiam facilisis. Aliquet
                pellentesque mauris dictum egestas. Elit at non sed in proin
                facilisis aliquam pellentesque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
