import React, { useEffect, useState } from "react";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import styles from "./checkout.module.css";
import { Popup } from "../paymentMethod/Popup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RemoveAll } from "../../../redux/guddu/cartRedux/CartAction";

export const Checkout = () => {
  const [payMth, setpayMth] = useState(false);
  const [formdata, setformdata] = useState({});
  const [payType, setpayType] = useState("");
  const [showbtn, setshowbtn] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const data = useSelector((state) => state.cartdata.cartdata);
  let subtotal = data.reduce((acc, elem) => {
    return (acc += elem.mrp * elem.qty);
  }, 0);
  let items = data.reduce((acc, elem) => {
    return (acc += elem.qty);
  }, 0);

  const handlechange = (e) => {
    let key = e.target.name;
    setformdata({
      ...formdata,
      [key]: e.target.value,
    });
    console.log(payType, formdata);
  };
  useEffect(() => {
    if (payType && formdata.full_name && formdata.email && formdata.phone_no) {
      console.log("show button true");
      setshowbtn(true);
    }
  }, [payMth]);

  const handleCheckout = () =>{
    navigate("/ordered");
    dispatch(RemoveAll());
  } 

  return (
    <>
      <div className={styles.headdiv}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
          alt="TripleRedLine"
        />
        <div id={styles.heading}>
          <h1>CheckOut</h1>
          <div>
            <i className="fa-solid fa-lock"></i> Secure Checkout
          </div>
        </div>
      </div>
      <div id={styles.Cmain}>
        <div className={styles.Cleft}>
          <div className={styles.pickupdiv}>
            <div>
              <h1>Pick Up info</h1>
            </div>
            <div>
              <div id={styles.store}>
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  <span>KFC Mumbai</span> - Hill Road Bandra 400050, Saint John
                  Baptist Road, near Federal Bank, Mount Mary, Bandra West,
                  Mumbai, Maharashtra, India
                </p>
                <div>
                  <i className="fa-solid fa-clock"></i> ASAP
                </div>
              </div>
              <div>
                <p className={styles.addpM}>Change</p>
              </div>
            </div>
          </div>
          <div className={styles.pickupopt}>
            <div>
              <h1>Pickup Option</h1>
            </div>
            <div>
              <p>Pick up from store</p>
            </div>
          </div>
          <div className={styles.contactinfo}>
            <div>
              <div>
                <h1>Contact Info</h1>
                <button onClick={() => navigate("/login")}>Sign in</button>
              </div>
            </div>
            <div>
              <p>Note: * Indicates required field</p>
              <input
                type="text"
                placeholder="Full Name*"
                name="full_name"
                onChange={handlechange}
                className={styles.inp}
              />
              <br />
              <input
                type="number"
                placeholder="Phone Number*"
                name="phone_no"
                onChange={handlechange}
                className={styles.inp}
              />
              <br />
              <input
                type="email"
                placeholder="Email*"
                name="email"
                onChange={handlechange}
                className={styles.inp}
              />
              <br />
              <input
                style={{ marginTop: "15px" }}
                type="checkbox"
                name="update"
                onChange={handlechange}
              /> 
                I want to know about the cool stuff at KFC on Email & SMS (I know
              I can unsubscribe anytime).
            </div>
          </div>
          <div className={styles.paymentdiv}>
            <div>
              <h1>Payment</h1>
            </div>
            <div onClick={() => setpayMth(true)}>
              <p className={styles.addpM}>Add payment method</p>
            </div>
            <Popup trigger={payMth} setpayMth={setpayMth}>
              <PaymentMethod setpayMth={setpayMth} setpayType={setpayType} />
            </Popup>
          </div>
        </div>
        <div className={styles.Cright}>
          <h1>{items} items</h1>
          <div className={styles.priceLine}>
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>
          <div className={styles.priceLine}>
            <p>GST</p>
            <p>₹9</p>
          </div>
          <div className={styles.priceLine}>
            <p>Large Carry Bag</p>
            <p>₹6</p>
          </div>
          {showbtn ? (
            <div id={styles.paybtn1} onClick={handleCheckout}>
              <p>Continue to Payment</p>
              <p>{subtotal + 9 + 6}</p>
            </div>
          ) : (
            <div id={styles.paybtn2}>
              <p>Continue to Payment</p>
              <p>₹{subtotal + 9 + 6}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
