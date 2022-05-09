import React, { useState } from "react";
import styles from "./SearchStore.module.css";

export const Search_store = ({ setactivePopup,address1, setaddress1 }) => {
  const [address, setaddress] = useState("");
  const handleAdd=()=>{
    setaddress1(address)
    localStorage.setItem("address", JSON.stringify(address));
    setactivePopup(false)
  }
  return (
    <div className={styles.Spop}>
      <div className={styles.headdiv}>
        <div>
          <i className="fa-solid fa-angle-left"></i>
        </div>
        <div>
          <h1>SELECT A KFC</h1>
        </div>
        <div>
          <button onClick={() => setactivePopup(false)}>X</button>
        </div>
      </div>
      <div className={styles.searchInp}>
      <i className="fa-solid fa-location-dot"></i>
        <input
          type="search"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          placeholder="Search by state, city or zip"
        />
        <button className={styles.btnAdd} onClick={handleAdd}>Confirm</button>
      </div>
    </div>
  );
};
