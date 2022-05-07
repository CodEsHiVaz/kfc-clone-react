import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const rowone = {
    display: "inline-flex",
    justifyContent: " space-evenly",
    width: "100%",
    fontFamily: "National 2 Regular",
    fontSize: "14px",
    marginTop: "5%",
    marginBottom: "4%",
  };
  return (
    <div className={styles.main}>
      <div style={rowone}>
        <img
          styles={{ marginTop: "-60px" }}
          src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
          alt=""
        />
        <div className={styles.catsec}>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>KFC Food</li>
              <li className={styles.lis}>Menu</li>
              <li className={styles.lis}>Order Lookup</li>
              <li className={styles.lis}>Gift Card</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>Support</li>
              <li className={styles.lis}>Get Help</li>
              <li className={styles.lis}>Contact Us</li>
              <li className={styles.lis}>KFC Feedback</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>Legal</li>
              <li className={styles.lis}>Terms and Conditions</li>
              <li className={styles.lis}>Privacy Policy</li>
              <li className={styles.lis}>Disclaimer</li>
              <li className={styles.lis}>Caution Notice</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>KFC India</li>
              <li className={styles.lis}>About KFC</li>
              <li className={styles.lis}>KFC Care</li>
              <li className={styles.lis}>Careers</li>
              <li className={styles.lis}>Our Golden Past</li>
            </ul>
          </div>
        </div>
        <div className={styles.findstore}>
          <img
            src="//images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg"
            alt=""
          />
          <a
            className={styles.link}
            target="#"
            tabindex="0"
            href="https://restaurants.kfc.co.in/"
          >
            Find a KFC
          </a>
        </div>
        <div className={styles.socialbtns}>
          <img
            src="//images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
            alt="Google Play"
          />
          <img
            src="//images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
            alt="Apple Store"
          ></img>
        </div>
      </div>
      {/* <div className={styles.footer1}>
        <div>
          <img className={styles.p192img} src="./logo192.png" alt="" />
        </div>
        <div className={styles.uls}>
          <ul className={styles.ultag}>
            <li className={styles.lis}>KFC Food</li>
            <li className={styles.lis}>Menu</li>
            <li className={styles.lis}>Order Lookup</li>
            <li className={styles.lis}>Gift Card</li>
          </ul>
          <ul className={styles.ultag}>
            <li className={styles.lis}>Support</li>
            <li className={styles.lis}>Get Help</li>
            <li className={styles.lis}>Contact Us</li>
            <li className={styles.lis}>KFC Feedback</li>
          </ul>
          <ul className={styles.ultag}>
            <li className={styles.lis}>Legal</li>
            <li className={styles.lis}>Terms and Conditions</li>
            <li className={styles.lis}>Privacy Policy</li>
            <li className={styles.lis}>Disclaimer</li>
            <li className={styles.lis}>Caution Notice</li>
          </ul>
          <ul className={styles.ultag}>
            <li className={styles.lis}>KFC India</li>
            <li className={styles.lis}>About KFC</li>
            <li className={styles.lis}>KFC Care</li>
            <li className={styles.lis}>Careers</li>
            <li className={styles.lis}>Our Golden Past</li>
          </ul>
        </div>
        <div className={styles.fanda}>
          <div className={styles.findtag}>Find a KFC</div>
          <div>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
              alt=""
            />
          </div>
        </div>
      </div>
 */}
      <div className={styles.footer2}>
        <div className={styles.f2ch}></div>
        <div className={styles.f22ch}>
          Copyright © KFC Corporation 2021 All Rights Reserved
        </div>
        <div className={styles.f2ch}></div>
      </div>
    </div>
  );
};

export default Footer;
