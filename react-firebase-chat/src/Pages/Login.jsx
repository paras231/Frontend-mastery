import React, { useState } from "react";
import styles from "../styles/register.module.scss";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
const Login = () => {
  const [err, setErr] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].vlaue;

    try {
   const user =    await signInWithEmailAndPassword(auth, email, password);
   console.log(user);
      navigate("/");
    } catch (error) {
      setErr(true);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <span className={styles.logo}>React Chat</span>
            <span className={styles.title}>Login</span>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button type="submit">Login</button>
            {err && <span style={{ color: "red" }}>Something went wrong</span>}
            <p>Don't have Account? Signup here</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
