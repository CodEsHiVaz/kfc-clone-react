import React, { useState } from "react";
import styles from "../Secblack/secblac.module.css";
import {Popup} from '../../g-components/paymentMethod/Popup'
const Secblack = () => {
  const [activePopup,setactivePopup] = useState(false)
  return (
    <div className={styles.secblackmain}>
      <h4 className={styles.secblactext}>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
      </h4>
      <button onClick={()=>setactivePopup(true) } className={styles.secblackbut}>Start Order</button>
      <Popup trigger = {activePopup}>
        <h1>hello brother</h1>
        <button onClick={()=>setactivePopup(false)}>X</button>
      </Popup>
    </div>
  );
};

export default Secblack;
