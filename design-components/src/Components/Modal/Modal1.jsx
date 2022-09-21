import React, { useState } from "react";
import styles from "./modal1.module.scss";

const Modal1 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <button className={styles.modalbtn} onClick={handleOpen}>
        Open modal
      </button>
      {open && (
        <div className={styles.cardWrapper}>
          <h1>modal content inside</h1>
        </div>
      )}
    </>
  );
};

export default Modal1;
