import React from "react";
import styles from "../styles/register.module.scss";
import { FcAddImage } from "react-icons/fc";

const Register = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <form action="">
            <span className={styles.logo}>React Chat</span>
            <span className={styles.title}>Register</span>
            <input type="text" placeholder="Display Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="file" style={{ display: "none" }} id="file" />
            <label htmlFor="file">
              <FcAddImage />
              <span>Add an Avatar</span>
            </label>
            <button>Signup</button>
            <p>Don't have Account? Login here</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
