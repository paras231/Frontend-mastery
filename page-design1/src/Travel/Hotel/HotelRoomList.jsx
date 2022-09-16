import React from "react";
import styles from "./hotelRoomList.module.scss";
import bed from "../../assets/bed.png";
import Couple from "../../assets/Couple.png";
import roomsize from "../../assets/roomsize.png";
import kingsizebed from "../../assets/kingsizebed.png";
import windowimg from "../../assets/window.png";
import checkmark from "../../assets/checkmark.png";

const HotelRoomList = () => {
  return (
    <>
      <section className={styles.hotelListMainWrapper}>
        <div className={styles.mainGreenbgDiv}>
          <p>Room Type</p>
          <p>Room Ooption</p>
          <p>Room Option</p>
          <p>Price</p>
        </div>
        <div className={styles.gridMainDiv}>
          <div className={styles.gridDiv1}>
            <div className={styles.detailCard1}>
              <p className={styles.roomTitle}>Superion Room</p>
              <img src={bed} alt="bed" />
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
            <div className={styles.detailCard1}>
              <p className={styles.roomTitle}>Superion Room</p>
              <img src={bed} alt="bed" />
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
            <div className={styles.detailCard1}>
              <p className={styles.roomTitle}>Superion Room</p>
              <img src={bed} alt="bed" />
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
          </div>
          <div className={styles.gridDiv2}>
            <div className={styles.grid2Child}>
              <div className={styles.child1}>
                <p className={styles.textdark}>Superior Room</p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
              <div className={styles.child1}>
                <p className={styles.textdark}>
                  Superior Room with free Breakfast
                </p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
            </div>
            <div className={styles.grid2Child}>
              <div className={styles.child1}>
                <p className={styles.textdark}>Superior Room</p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
              <div className={styles.child1}>
                <p className={styles.textdark}>
                  Superior Room with free Breakfast
                </p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
            </div>
            <div className={styles.grid2Child}>
              <div className={styles.child1}>
                <p className={styles.textdark}>Superior Room</p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
              <div className={styles.child1}>
                <p className={styles.textdark}>
                  Superior Room with free Breakfast
                </p>
                <p className={styles.textRed}>Non Refundable</p>
                <p className={styles.blueText}>Cancelletion Policy</p>
              </div>
            </div>
          </div>
          <div className={styles.gridDiv3}>
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
          </div>
          <div className={styles.gridDiv4}>
            <div className={styles.priceDiv}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>$250</p>
                <p>+$25 taxes & fees</p>
                <button className={styles.selectButton}>
                Select Room
                </button>
            </div>
            <div className={styles.priceDiv}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>$250</p>
                <p>+$25 taxes & fees</p>
                <button className={styles.selectButton}>
                Select Room
                </button>
            </div>
            <div className={styles.priceDiv}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>$250</p>
                <p>+$25 taxes & fees</p>
                <button className={styles.selectButton}>
                Select Room
                </button>
            </div>
            <div className={styles.priceDiv}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>$250</p>
                <p>+$25 taxes & fees</p>
                <button className={styles.selectButton}>
                Select Room
                </button>
            </div>
            <div className={styles.priceDiv}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>$250</p>
                <p>+$25 taxes & fees</p>
                <button className={styles.selectButton}>
                Select Room
                </button>
            </div>
            <div className={styles.priceDiv}>
                <p>Price Starts At</p>
                <p>Per Night</p>
                <p className={styles.darkPrice}>$365</p>
                <p className={styles.redPrice}>$250</p>
                <p>+$25 taxes & fees</p>
                <button className={styles.selectButton}>
                Select Room
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelRoomList;
