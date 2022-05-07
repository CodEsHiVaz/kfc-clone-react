import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
import Secblack from "../Secblack/Secblack"
const Navbar = () => { 

  
  const data = useSelector((state) => state.cartdata.cartdata);
  const items = data.reduce((acc, elem) => {
    return (acc += elem.qty);
  }, 0);
  const subtotal = data.reduce((acc, elem) => {
    return (acc += elem.price * elem.qty);
  }, 0);
  const navigate = useNavigate();
  return (<>
    <div className={styles.navpar}>
      <div className={styles.bgcl}>
        <div  className={styles.subpars}>
          <img onClick={()=>navigate("/")}
            className={styles.logoofkfc}
            src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
            alt="ddd"
          />
          <div onClick={()=>navigate("/menu")} className={styles.fornavmenu}>
            {/* <Link to="">Menu</Link> */}
            Menu
          </div>
          <div onClick={()=>navigate("/deals")} className={styles.fornavmenu}>Deals</div>
        </div>
        <div className={styles.subpars}>
          <div className={styles.logoac}>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
              alt="acc"
            />
          </div>
          <div className={styles.forsignin} onClick={()=>navigate("/Signin")}>Sign in</div>
          <div className={styles.vl}></div>
          <div className={styles.fordigit}>
            <p>₹ {subtotal}</p>
          </div>
          <div onClick={()=>navigate("/cart")} className={styles.logocart}> 
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
              alt=""
            />
            <p id={styles.cartitems}>{items}</p>
          </div>
        </div>
      </div>
    </div>
    <Secblack/>
    </>
  );
};

export default Navbar;
