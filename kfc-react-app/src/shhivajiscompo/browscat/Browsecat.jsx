import React from "react";
import styles from "./browsecat.module.css";
const Browsecat = () => {
  return (
    <div className={styles.main}>
      <div className={styles.forheadrow}>
        <h1 className={styles.head}>BROWSE CATEGORIES</h1>
        <div className={styles.lineoggray}></div>
      </div>
      <div className={styles.cardcontain}>
        <div className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT145.jpg?ver=14.71"
            alt="Big Treat Week"
          />
          <p className={styles.cardname}>Big Treat Week</p>
        </div>
        <div className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT182.jpg?ver=14.71"
            alt="Big Treat Week"
          />
          <p className={styles.cardname}>Match Day Specials</p>
        </div>
        <div className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=14.71"
            alt="Big Treat Week"
          />
          <p className={styles.cardname}>Chicken Buckets</p>
        </div>
        <div className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=14.71"
            alt="Big Treat Week"
          />
          <p className={styles.cardname}>Biryani Buckets</p>
        </div>
        <div className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=14.71"
            alt="Big Treat Week"
          />
          <p className={styles.cardname}>Box Meals</p>
        </div>
        <div className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=14.71"
            alt="Big Treat Week"
          />
          <p className={styles.cardname}>Burgers</p>
        </div>
        <div className={styles.child}>
          <img
            className={styles.cardimages}
            src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT178.jpg?ver=14.71"
            alt="Big Treat Week"
          />
          <p className={styles.cardname}>Stay Home Specials</p>
        </div>
        <div className={styles.child}>
          <img
            className={styles.cardimagessp}
            src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"
            alt="Big Treat Week"
          />
          <div className={styles.divs}>
            <p className={styles.cardnamesp}>View All Menu </p>
            <img
              className={styles.arrow}
              src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browsecat;
