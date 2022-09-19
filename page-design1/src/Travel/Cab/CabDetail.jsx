import React from "react";
import styles from "./cabDetail.module.scss";
import tick from "../../assets/tick.png";
import driver from "../../assets/drive.png";
import taxi from "../../assets/Taxi.png";
import spray from "../../assets/Spray.png";

const CabDetail = () => {
  const url =
    "https://images.unsplash.com/photo-1484490548882-460414740a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <>
      <center>
        <div className={styles.detailCardWrapper}>
          <div className={styles.imageDiv}>
            <img src={url} alt="cab" />
          </div>
          <div className={styles.cabDetailDiv}>
            <p className={styles.cabNameText}>Maruti Suzuki Ertiga</p>
            <p className={styles.cabTitleText}>SUV . AC . 5 Seats</p>
            <p className={styles.cabSize}>Large Car</p>
            <div className={styles.cabDescDiv}>
              <p className={styles.cabDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis alias accusamus dolore.
              </p>
            </div>
            <div className={styles.sanitizedDiv}>
              <img src={tick} />
              <p>Sanitizers Installed</p>
            </div>
          </div>
          <div className={styles.bookNowDiv}>
            <div className={styles.cancellation}>
              Free cancelltion till1 hour of departure
            </div>
            <div className={styles.cheaperDiv}>41% cheaper than usual</div>
            <div className={styles.priceDiv}>
              <p className={styles.smallPrice}>$726</p>
              <p className={styles.bigPrice}>$438</p>
            </div>
            <button className={styles.bookNowBtn}>Book Now</button>
          </div>
        </div>
      </center>
      <div className={styles.secondaryDiv}>
        <div className={styles.secondaryOne}>
          <p className={styles.driverText}>Driver & Cab details</p>
          <p className={styles.detailText}>
            Cab and driver details will be shared up to 30 mins prior to
            departure.
          </p>
          <p className={styles.hygenic}>Driver & Cab details</p>
          <div className={styles.safetyDiv}>
            <div className={styles.maskDiv}>
              <img src={driver} alt="" />
              <p>Driver width mask</p>
            </div>
            <div className={styles.sanitizedCab}>
              <img src={taxi} />
              <p>maskDiv</p>
            </div>
            <div className={styles.handSanitized}>
              <img src={spray} alt="" />
              <p>Hand Sanitizers</p>
            </div>
          </div>
          <p className={styles.signup}>Sign up or Login Now</p>
          <p className={styles.unlockDeals}>
            View your traveller information & unlock deals!
          </p>
          <p className={styles.hygenic}>Trip details</p>
          <div className={styles.pickupDiv}>
            <p className={styles.pickupTextBold}>Pick-up Address</p>
            <p className={styles.pickupsmalTxt}>
              (Optional - This will help you avoid any extra charges after the
              trip)
            </p>
          </div>
          <input
            type="text"
            className={styles.addressInput}
            placeholder="Enter Pick up address"
          />
          <div className={styles.pickupDiv}>
            <p className={styles.pickupTextBold}>Drop-off Address</p>
            <p className={styles.pickupsmalTxt}>
              (Optional - This will help you avoid any extra charges after the
              trip)
            </p>
          </div>
          <input
            type="text"
            className={styles.addressInput}
            placeholder="Enter Pick up address"
          />
          <p className={styles.confirmText}>Confirm Traveller information</p>
          <div className={styles.inputsWrapper}>
            <div className={styles.nameInputDiv}>
              <p>Name</p>
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div className={styles.genderInputDiv}>
              <p>Gender</p>
              <div className={styles.checkBoxWrapper}>
                <div className={styles.maleWrapper}>
                  <input type="radio" />
                  <p>Male</p>
                </div>
                <div className={styles.femaleWrapper}>
                  <input type="radio" />
                  <p>Female</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.emailNumberWrapper}>
            <div className={styles.emailWrapper}>
              <p>Email id</p>
              <input type="text" placeholder="Enter Email Id" />
            </div>
            <div className={styles.contactWrapper}>
              <p>Contact</p>
              <div className={styles.selectInput}>
                <select>
                  <option value="">91+</option>
                  <option value="">91+</option>
                  <option value="">91+</option>
                </select>
                <input type="text" placeholder="Enter Email Id" />
              </div>
            </div>
          </div>
          <p className={styles.readBefore}>Read before you book!</p>
          <div className={styles.catgoryWrapper}>
            <div className={styles.cabCaterory}>
              <p className={styles.readBefore}>Cab Category</p>
              <div className={styles.categoryText}>
                <p>
                  The booking will be for cab type HATCHBACK and we do not
                  commit on providing the preferred cab model (Indica, Swift or
                  similar)
                </p>
              </div>
              <p className={styles.readBefore}>Hilly Regions</p>
              <div className={styles.categoryText}>
                <p>The booking will be for cab type HATCHBACK</p>
              </div>
              <p className={styles.readBefore}>Luggage Policy</p>
              <div className={styles.categoryText}>
                <p>
                  The booking will be for cab type HATCHBACK and we do not
                  commit on providing the preferred cab model (Indica, Swift or
                  similar)
                </p>
              </div>
              <p className={styles.readBefore}>Driver Details</p>
              <div className={styles.categoryText}>
                <p>
                  The booking will be for cab type HATCHBACK and we do not
                  commit on providing the preferred cab model (Indica, Swift or
                  similar)
                </p>
              </div>
            </div>
            <div className={styles.cabCaterory}>
              <p className={styles.readBefore}>Cab Category</p>
              <div className={styles.categoryText}>
                <p>
                  The booking will be for cab type HATCHBACK and we do not
                  commit on providing the preferred cab model (Indica, Swift or
                  similar)
                </p>
              </div>
              <p className={styles.readBefore}>Hilly Regions</p>
              <div className={styles.categoryText}>
                <p>The booking will be for cab type HATCHBACK</p>
              </div>
              <p className={styles.readBefore}>Luggage Policy</p>
              <div className={styles.categoryText}>
                <p>
                  The booking will be for cab type HATCHBACK and we do not
                  commit on providing the preferred cab model (Indica, Swift or
                  similar)
                </p>
              </div>
              <p className={styles.readBefore}>Driver Details</p>
              <div className={styles.categoryText}>
                <p>
                  The booking will be for cab type HATCHBACK and we do not
                  commit on providing the preferred cab model (Indica, Swift or
                  similar)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.secondaryTwo}></div>
      </div>
    </>
  );
};

export default CabDetail;
