import React, { useState } from "react";
import styles from "./Otp.module.css";


export const Otp =()=>{


    // var userDataBase = JSON.parse(localStorage.getItem("userDataBase")) || [];
     let phone=JSON.parse(localStorage.getItem("phone")) ||[];



   
    //  let backtosignin=()=>{location.href="signin.html"}
    //  var userDataBase = JSON.parse(localStorage.getItem("userDataBase")) || [];
     
    //  let phone=JSON.parse(localStorage.getItem("phone"))
    // document.querySelector("#sent_to").innerHTML=phone
    //  sent_to
    //  console.log(phone)
    // document.querySelector("#form").addEventListener("submit", formfumction)

    // let flag = 0;
   
   
   
    // function formfumction() {
    //     event.preventDefault();
        
    //     var otp = document.querySelector("#otp_value").value;
    //     if(otp>1000)
    //     {
    //         userDataBase.map(function (elem) {
    //          if (phone  === elem.Phone) {
    //             localStorage.setItem("User", JSON.stringify(elem))
        
    //             // localStorage.setItem("User", JSON.stringify(User))
    //                location.href = "index.html";
    //             }
            
    //                 });
    //          }
    //     }
     
         


return(
    <div id={styles.centre}>
        <div className={styles.header}>Sign In / Sign up
        
        
        </div>
        <div className={styles.logoimg}><img src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/KFC_logo.svg"
                 alt="noimg" /></div>
        <div className={styles.siocawp}>WE JUST TEXTED YOU</div>

        <div className={styles.displayPhoneNumber}>Please enter the verification code we just sent to {phone}</div>
        <div className={styles.differentNumber}>Different number?</div>

        <input  className={styles.otp} id="phone" type="number" placeholder="OTP*" maxlength={"4"}  />

        <div className={styles.displayPhoneNumber}>Your code will expire in 0:180 sec</div>
        <div className={styles.differentNumber}>Resend the Code</div>

        <div class={styles.skipBtnDiv}>
                <button class={styles.skipBtn} id="skipBtn" >Submit</button>
            </div> 


    </div>


)


}