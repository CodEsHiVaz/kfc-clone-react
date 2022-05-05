import React from "react";
import styles from "./Payment.module.css";

export const PaymentMethod = (props) => {
  return (
    <div id={styles.model}>
      <div id={styles.payMHead}>
          <h2>SELECT YOUR PAYMENT</h2>
          <button>X</button>
      </div>
      <div className={styles.centerdiv}>
        <div className={styles.paymentOption}>
          <input type="radio" />
          <span>Credit/Debit card</span>
        </div>
        <div className={styles.paymentOption}>
          <input type="radio" />
          <span>Gift card</span>
        </div>
        <div className={styles.paymentOption}>
          <input type="radio" />
          <span>Net Banking</span>
        </div>
        <div className={styles.paymentOption}>
          <input type="radio" />
          <span>Other wallets</span>
        </div>
      </div>
      <div id={styles.paybtndiv}>
        <button id={styles.payMbtn}>Submit</button>
      </div>
    </div>
  );
};
