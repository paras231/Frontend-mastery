import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./contact.module.scss";

const Contactus = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  return (
    <>
      <div>
        <button className={styles.contactbtn} onClick={handleClickOpen}>
          Contact Us
        </button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" className={styles.title}>
            {"Contact Us"}
          </DialogTitle>
          <DialogContent className={styles.main}>
            <div className={styles.content}>
              <form className={styles.form}>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  placeholder="Mobile"
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  placeholder="Expected arrival date"
                  className={styles.input}
                  required
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter Your Query"
                  required
                  className={styles.textarea}
                />
                <div className={styles.btn}>
                  <button>Contact</button>
                </div>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Contactus;
