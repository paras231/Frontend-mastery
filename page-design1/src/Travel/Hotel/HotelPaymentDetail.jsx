import React from "react";
import styles from "./hotelPaymentDetail.module.scss";
import hotelpic from "../../assets/hotelpic.png";
import { BsStarFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Couple from "../../assets/Couple.png";
import checkmark from "../../assets/checkmark.png";

const HotelPaymentDetail = () => {
  return (
    <>
      {/* this page has been devided into two section  section one will be flex-3 and section two will be flex1 */}
      <section className={styles.mainContainer}>
        {/* section left here */}
        <section className={styles.leftMainSection}>
          <div className={styles.leftMainDiv1}>
            <p className={styles.infoText}>Hotel Info</p>
            <hr />
            <div className={styles.hotelInfo}>
              <img src={hotelpic} alt="hotel" />
              <div className={styles.infoDetail}>
                <div className={styles.starDiv}>
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                  <BsStarFill style={{ color: "yellow" }} />
                </div>
                <p className={styles.hotelName}>Vulputate mattis Hotel</p>
                <div className={styles.locationDiv}>
                  <MdLocationOn className={styles.pinIcon} />
                  <p>98412 Turcotte Terrace</p>
                </div>
                <p>129 Verified Ratings</p>
              </div>
            </div>
            <div className={styles.checkinCheckoutDiv}>
              <div className={styles.checkinDiv}>
                <p>Check In</p>
                <p>Mon, 12 Sep 2022</p>
                <p>12:00 PM</p>
              </div>
              <div className={styles.checkOutdiv}>
                <p>Check In</p>
                <p>Mon, 12 Sep 2022</p>
                <p>12:00 PM</p>
              </div>
              <div className={styles.guestDiv}>
                <p>Guests</p>
                <p>2 Guests 1 Room</p>
                <p>1 Night</p>
              </div>
            </div>
            <div className={styles.adultDetailDiv}>
              <div className={styles.adultDetailChild1}>
                <p className={styles.roomText}>1 Room for 2 Adults</p>
                <p className={styles.greenSmallText}>
                  Great Choice! You are saving ₹4963 with your booking
                </p>
                <p className={styles.superiorText}>Superior Room</p>
                <div className={styles.adultIconTextWrapper}>
                  <img src={Couple} alt="couple" />
                  <p>2 Adults</p>
                </div>
                <p>Rooms only | Non Refundable</p>
                <p className={styles.cancelText}>
                  View Booking & Cancellation Policy
                </p>
              </div>
              <div className={styles.adultDetailChild2}>
                <div className={styles.checkOne}>
                  <img src={checkmark} alt="check" />
                  <p>
                    Book now & avail happy hours from 1100 hrs to 1800 hrs and
                    10% discount on food and 20% discount on Buffet
                  </p>
                </div>
                <div className={styles.checkTwo}>
                  <img src={checkmark} alt="check" />
                  <p>Late Check out up-to 2 hours (subject to availability)</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.leftMainDiv2}>
            <p className={styles.guestHeading}>Guest Details</p>
            <hr />
            <div className={styles.formDetailWrapper1}>
              <div className={styles.titleDiv}>
                <p>Title</p>
                <select className={styles.selectTitle}>
                  <option>Mr</option>
                  <option>Mrs</option>
                </select>
              </div>
              <div className={styles.firstNameDiv}>
                <p>First Name</p>
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div className={styles.firstNameDiv}>
                <p>Last Name</p>
                <input type="text" placeholder="Enter Last Name" />
              </div>
            </div>
            <div className={styles.formDetailWrapper2}>
              <div className={styles.emailWrapper}>
                <div className={styles.emailTextWrapper}>
                  <p>Email Address</p>
                  <p className={styles.smallText}>
                    (Your booking voucher will be sent to this email address)
                  </p>
                </div>
                <input type="text" placeholder="Enter Email Address" />
              </div>
              <div className={styles.mobileNumberWrapper}>
                <p>Mobile Number</p>
                <input type="text" placeholder="Enter Phone Number" />
              </div>
            </div>
            <hr />
            <div className={styles.gstChekboxDiv}>
              <input type="checkbox" />
              <p>Enter GST Details (optional)</p>
            </div>
          </div>
          <div className={styles.leftMainDiv3}>
            <p className={styles.secureText}>Secure Your Stay</p>
            <p className={styles.insuranceText}>
              Insurance will be sent to the registered Email ID, within 48 hours
              of booking
            </p>
            <hr />
            <p className={styles.worryFree}>Worry-Free Hotel Stay!</p>
            <div className={styles.listItem}>
              <ul>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
              </ul>
              <div className={styles.addButtonDiv}>
                <div className={styles.wrapperButton}>
                  <p className={styles.gstValue}>₹29 per person</p>
                  <p>₹29 per person</p>
                  <p>Non Refundable| Includes GST</p>
                  <button className={styles.addbtn}>ADD</button>
                </div>
              </div>
            </div>
            <button className={styles.proceedToPaymentOption}>
              Proceed To Payment Option
            </button>
            <p className={styles.termText}>
              By proceeding, I agree to Goibibo's Privacy Policy, User Agreement
              & Terms of Service
            </p>
          </div>
        </section>
        {/* section right here */}
        <section className={styles.rightMainSection}>
          <div className={styles.rightMainDiv1}>
            <p className={styles.priceSummaryText}>Price Summary</p>

            <hr />
            <div className={styles.roomCharge}>
              <p>Room Charges (1 room x 1 night)</p>
              <p>$450</p>
            </div>
            <div className={styles.discount}>
              <p>Total Discount</p>
              <p>$150</p>
            </div>
            <div className={styles.coupon}>
              <img src={checkmark} alt="text" />
              <p>GETSETGO applied</p>
            </div>
            <hr />
            <div className={styles.afterDiscount}>
              <p>Price After Discounts</p>
              <p>$350</p>
            </div>
            <div className={styles.taxfee}>
              <p>Taxes & Fees</p>
              <p>$350</p>
            </div>
            <div className={styles.payableNow}>
              <p>Payable Now</p>
              <p>$450</p>
            </div>
            <button className={styles.logiBtnHere}>
              Login now & get at a lower price
            </button>
          </div>
          <div className={styles.rightMainDiv2}>
            <p className={styles.offerText}>Offers</p>
            <hr />
            <div className={styles.couponTextWraper}>
              <input type="radio" />
              <p>GETSETGO</p>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr />

            <hr />
            <div className={styles.couponTextWraper}>
              <input type="radio" />
              <p>GETSETGO</p>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr />

            <div className={styles.couponTextWraper}>
              <input type="radio" />
              <p>GETSETGO</p>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr />

            <div className={styles.couponTextWraper}>
              <input type="radio" />
              <p>GETSETGO</p>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr />

            <div className={styles.couponTextWraper}>
              <input type="radio" />
              <p>GETSETGO</p>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr />
            <div className={styles.couponTextWraper}>
              <input type="radio" />
              <p>GETSETGO</p>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr />
            <div className={styles.couponTextWraper}>
              <input type="radio" />
              <p>GETSETGO</p>
              <p>-₹1089</p>
            </div>
            <div className={styles.couponDesc}>
              Congratulations! You have saved ₹1091 with GETSETGO. Use GETSETGO
              to get instant discount on this hotel booking.
            </div>
            <hr />
          </div>
        </section>
      </section>
    </>
  );
};

export default HotelPaymentDetail;
