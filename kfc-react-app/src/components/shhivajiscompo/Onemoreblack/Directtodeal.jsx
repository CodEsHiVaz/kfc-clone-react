import React from "react";
import { useNavigate } from "react-router";
import styles from "./Directtodeal.module.css";
const Directtodeal = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.main}>
      <div style={{ width: "30%" }}></div>

      <div className={styles.splitbet}>
        <div className={styles.lines}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.dist}>
          <div className={styles.dist}>
            <h4 className={styles.h2}>OFFERS & DEALS</h4>
          </div>

          <p onClick={()=>navigate("/deals")} className={styles.cardnamesp}>View All Menu </p>
        </div>
        <div className={styles.card}>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg"
              alt=""
            />
            <h1> 1 PC Free chicken</h1>
            <div className={styles.btpar}>
              <p>View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg"
              alt=""
            />
            <h1> 1 PC Free chicken</h1>
            <div className={styles.btpar}>
              <p>View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
          <div className={styles.carcomp}>
            <img
              className={styles.imgofcard}
              src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg"
              alt=""
            />
            <h1> 1 PC Free chicken</h1>
            <div className={styles.btpar}>
              <p >View Details</p>
              <button className={styles.btnbtn}>Redeem</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directtodeal;
