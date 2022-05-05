import React from "react";
import { useState } from "react";
import styles from "./cartcard.module.css"

export const CartCard = (props) => {
  const [qty,setqty]= useState(1);
  return (
    <div id={styles.frame}>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div id={styles.centerDiv}>
        <p >{props.title}</p>
        <button onClick={""}>Remove</button>
      </div>
      <div id={styles.priceandqty}>
          <button className={styles.btn} onClick={()=> qty>1? setqty(qty-1) :setqty(1)}>-</button>
          <p>{qty}</p>
          <button className={styles.btn} onClick={()=>setqty(qty+1)}>+</button>
          <p>{`₹${props.price * qty}`}</p>
      </div>
    </div>
  );
};
