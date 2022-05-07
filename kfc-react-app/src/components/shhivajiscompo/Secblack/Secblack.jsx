import React from "react";
import styles from "../Secblack/secblac.module.css";
const Secblack = () => {
  return (
    <div className={styles.secblackmain}>
      <h4 className={styles.secblactext}>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
      </h4>
      <button className={styles.secblackbut}>Start Order</button>
    </div>
  );
};

export default Secblack;
