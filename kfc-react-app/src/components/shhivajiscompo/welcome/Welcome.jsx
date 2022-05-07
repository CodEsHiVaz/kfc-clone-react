import React from "react";
import styles from "../welcome/welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.main}>
      <div className={styles.m1}>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <p className={styles.h2t}>WELCOME TO KFC!</p>
      </div>
      <div className={styles.m2}></div>
    </div>
  );
};

export default Welcome;
