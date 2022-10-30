import React from "react";
import styles from "./HotelList.module.scss";
import bed from "../../assets/bed.png";
import Couple from "../../assets/Couple.png";
import roomsize from "../../assets/roomsize.png";
import kingsizebed from "../../assets/kingsizebed.png";
import windowimg from "../../assets/window.png";
import checkmark from "../../assets/checkmark.png";
import whiteline from "../../assets/whiteline.png";
import line36 from "../../assets/line36.png";
import line30 from "../../assets/line30.png";
import line31 from "../../assets/line31.png";
import Review from "../Review/Review";

const HotelList = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrappermain}>
          <div className={styles.container}>
            <div className={styles.detailCard1}>
              <p className={styles.roomTitle}>Superion Room</p>
              <img src={bed} alt="bed" />
            </div>

            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.child1}>
              <p className={styles.textdark}>Superior Room</p>
              <p className={styles.textRed}>Non Refundable</p>
              <p className={styles.blueText}>Cancelletion Policy</p>
            </div>
            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.inclusionDiv}>
              <div className={styles.inclusionChild1}>
                <img src={checkmark} alt="check" />
                <p>
                  Book now & avail happy hours from 1100 hrs to 1800 hrs and 10%
                  discount on food and 20% discount on Buffet
                </p>
              </div>
              <div className={styles.inclusionChild1}>
                <img src={checkmark} alt="check" />
                <p>Late Check out up-to 2 hours (subject to availability)</p>
              </div>
            </div>
            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.priceDiv}>
              <p>Price Starts At</p>
              <p>Per Night</p>
              <p className={styles.darkPrice}>$365</p>
              <p className={styles.redPrice}>$250</p>
              <p>+$25 taxes & fees</p>
              <button className={styles.selectButton}>Select Room</button>
            </div>
          </div>

          <img src={line30} alt="line" className={styles.line30} />
        </div>
        <div className={styles.wrappermain}>
          <div className={styles.container}>
            <div className={styles.detailCard1}>
              <div className={styles.accomodations}>
                <img src={Couple} alt="couples" />
                <p>Accomodates 3 Adults</p>
              </div>
              <div className={styles.roomSize}>
                <img src={roomsize} alt="roomsize" />
                <p>280 sq ft.</p>
              </div>
              <div className={styles.kingSizedBed}>
                <img src={kingsizebed} />
                <p>King Size Bed</p>
              </div>
              <div className={styles.cityView}>
                <img src={windowimg} alt="windowimg" />
                <p>City View</p>
              </div>
              <div className={styles.viewMore}>
                <p>View More Details</p>
              </div>
            </div>

            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.child1} style={{ marginTop: "2vmax" }}>
              <p className={styles.textdark}>Superior Room</p>
              <p className={styles.textRed}>Non Refundable</p>
              <p className={styles.blueText}>Cancelletion Policy</p>
            </div>
            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.inclusionDiv} style={{ marginTop: "2vmax" }}>
              <div className={styles.inclusionChild1}>
                <img src={checkmark} alt="check" />
                <p>
                  Book now & avail happy hours from 1100 hrs to 1800 hrs and 10%
                  discount on food and 20% discount on Buffet
                </p>
              </div>
              <div className={styles.inclusionChild1}>
                <img src={checkmark} alt="check" />
                <p>Late Check out up-to 2 hours (subject to availability)</p>
              </div>
            </div>
            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.priceDiv} style={{ marginTop: "2vmax" }}>
              <p>Price Starts At</p>
              <p>Per Night</p>
              <p className={styles.darkPrice}>$365</p>
              <p className={styles.redPrice}>$250</p>
              <p>+$25 taxes & fees</p>
              <button className={styles.selectButton}>Select Room</button>
            </div>
          </div>
          <img src={line31} alt="" />
        </div>
        <div className={styles.wrappermain}>
          <div className={styles.container}>
            <div className={styles.detailCard1}>
              <p className={styles.roomTitle}>Superion Room</p>
              <img src={bed} alt="bed" />
            </div>

            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.child1}>
              <p className={styles.textdark}>Superior Room</p>
              <p className={styles.textRed}>Non Refundable</p>
              <p className={styles.blueText}>Cancelletion Policy</p>
            </div>
            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.inclusionDiv}>
              <div className={styles.inclusionChild1}>
                <img src={checkmark} alt="check" />
                <p>
                  Book now & avail happy hours from 1100 hrs to 1800 hrs and 10%
                  discount on food and 20% discount on Buffet
                </p>
              </div>
              <div className={styles.inclusionChild1}>
                <img src={checkmark} alt="check" />
                <p>Late Check out up-to 2 hours (subject to availability)</p>
              </div>
            </div>
            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.priceDiv}>
              <p>Price Starts At</p>
              <p>Per Night</p>
              <p className={styles.darkPrice}>$365</p>
              <p className={styles.redPrice}>$250</p>
              <p>+$25 taxes & fees</p>
              <button className={styles.selectButton}>Select Room</button>
            </div>
          </div>

          <img src={line30} alt="line" className={styles.line30} />
        </div>
        <div className={styles.wrappermain}>
          <div className={styles.container}>
            <div className={styles.detailCard1}>
              <div className={styles.accomodations}>
                <img src={Couple} alt="couples" />
                <p>Accomodates 3 Adults</p>
              </div>
              <div className={styles.roomSize}>
                <img src={roomsize} alt="roomsize" />
                <p>280 sq ft.</p>
              </div>
              <div className={styles.kingSizedBed}>
                <img src={kingsizebed} />
                <p>King Size Bed</p>
              </div>
              <div className={styles.cityView}>
                <img src={windowimg} alt="windowimg" />
                <p>City View</p>
              </div>
              <div className={styles.viewMore}>
                <p>View More Details</p>
              </div>
            </div>

            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.child1} style={{ marginTop: "2vmax" }}>
              <p className={styles.textdark}>Superior Room</p>
              <p className={styles.textRed}>Non Refundable</p>
              <p className={styles.blueText}>Cancelletion Policy</p>
            </div>
            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.inclusionDiv} style={{ marginTop: "2vmax" }}>
              <div className={styles.inclusionChild1}>
                <img src={checkmark} alt="check" />
                <p>
                  Book now & avail happy hours from 1100 hrs to 1800 hrs and 10%
                  discount on food and 20% discount on Buffet
                </p>
              </div>
              <div className={styles.inclusionChild1}>
                <img src={checkmark} alt="check" />
                <p>Late Check out up-to 2 hours (subject to availability)</p>
              </div>
            </div>
            <img src={line36} alt="" className={styles.line36} />
            <div className={styles.priceDiv} style={{ marginTop: "2vmax" }}>
              <p>Price Starts At</p>
              <p>Per Night</p>
              <p className={styles.darkPrice}>$365</p>
              <p className={styles.redPrice}>$250</p>
              <p>+$25 taxes & fees</p>
              <button className={styles.selectButton}>Select Room</button>
            </div>
          </div>
          <img src={line31} alt="" />
        </div>
      </div>
      <Review/>
    </>
  );
};

export default HotelList;
