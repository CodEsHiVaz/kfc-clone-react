import React from "react";
import { useState } from "react";
import styles from "./cartcard.module.css"

export const CartCard = () => {
  const [qty,setqty]= useState(0);
  return (
    <div id={styles.frame}>
      <div>
        <img src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-120089.jpg" alt="" />
      </div>
      <div id={styles.centerDiv}>
        <p >hello world</p>
        <button onClick={""}>Remove</button>
      </div>
      <div id={styles.priceandqty}>
          <button className={styles.btn} onClick={()=> qty>1? setqty(qty-1) :setqty(1)}>-</button>
          <p>{qty}</p>
          <button className={styles.btn} onClick={()=>setqty(qty+1)}>+</button>
          <p>{`₹${418.0}`}</p>
      </div>
    </div>
  );
};
