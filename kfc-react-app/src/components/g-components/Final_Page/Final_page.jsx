import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Final_page.module.css"

export const Final_page = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.mainDiv}>
        <div> <img src="https://c.tenor.com/0AVbKGY_MxMAAAAC/check-mark-verified.gif" alt="green tick" /></div>
        <h1>THANK YOU FOR YOUR PURCHASE</h1>
        <p>Your order id is: <span>85421369754</span></p>
        <div><button onClick={()=>navigate('/menu')}>Order More</button></div>
    </div>
  )
}
