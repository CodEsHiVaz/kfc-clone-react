import React, { useState } from "react";
import styles from "./Signin.module.css";


export const Signin =()=>{


//     var userDataBase = JSON.parse(localStorage.getItem("userDataBase")) || [];
// document.querySelector("#form").addEventListener("submit", formfumction)
// var Exist=0;

// function formfumction() {
//         preventDefault();
//         // taking info from user
//         var phone = document.querySelector("#phone").value;
//         if(phone===null){return;}
        
//         userDataBase.map(function (elem) {
//             console.log(elem)
//             if (phone == elem.Phone) {
//                 //send for otp verification 
//                 Exist=1;
//                 localStorage.setItem("phone",JSON.stringify(phone))
//                 location.href = "mamaearthotp.html";
//             }
//         })

//         //send to create account
//          if (Exist == 0) {
//                   localStorage.setItem("phone",JSON.stringify(phone))
//            //
//          }
            
//     }    
//      document.querySelector(".last").addEventListener("click",()=>{
//          window.location.href="/index.html"
//      })




return(
    <div id={styles.centre}>
        <div className={styles.header}>Sign In / Sign up
        
        
        </div>
        <div className={styles.logoimg}><img src="https://login.kfc.co.in/auth/resources/1vkce/login/kfcIndiaLoginUIDev_2021_10_27_16_49/images/KFC_logo.svg"
                 alt="noimg" /></div>
        <div className={styles.siocawp}>LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</div>

       
            <input  className={styles.phoneNumberId} id="phone" type="number" placeholder="Phone Number*" maxlength="10" />
        <div className={styles.privacypolicy}>By “logging in to KFC”, you agree to our 
            <a href="https://online.kfc.co.in/privacyPolicy"><b> Privacy Policy </b></a>
             and 
             <a href="https://online.kfc.co.in/terms-and-conditions"><b> Terms & Conditions</b></a>
             .</div>

             <div class={styles.btnDiv}>
            <button id="btnSendCode" class={styles.btnSendCode} >Send Me a Code</button>
        </div> 
        <div class={styles.orDiv}>
                <div class={styles.orLeft}></div>
                <div class={styles.orCenter}>or</div>
                <div class={styles.orRight}></div>

            </div>

            <div class={styles.skipBtnDiv}>
                <button class={styles.skipBtn} id="skipBtn" >Skip, Continue As Guest</button>
            </div>   
   
    </div>


)


}