import React, { useEffect, useState } from "react";
import styles from "./cart.module.css";
import { CartCard } from "../cartcard/CartCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RemoveAll } from "../../../redux/guddu/cartRedux/CartAction";

export default function Cart() {
  const [cartData, setcartData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cartdata.cartdata);
  const items = cartData.reduce((acc, elem) => {
    return (acc += elem.qty);
  }, 0);

  useEffect(() => {
    setcartData(data);
  }, [cartData, dispatch, data]);

  let subtotal;
  if (cartData.length == 0) {
    subtotal = 0;
  } else {
    subtotal = cartData.reduce((acc, elem) => {
      return (acc += elem.price * elem.qty);
    }, 0);
  }

  const removeAll = () => {
    dispatch(RemoveAll());
  };

  return (
    <>
      <div className={styles.cdTop}>
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
            alt="TripleRedLine"
          />
        </div>
        <h1>MY CART</h1>
      </div>
      {/* conditional rendering when empty it will show */}
      {cartData.length == 0 ? (
        <div id={styles.cartdiv1}>
          <div id={styles.cartdiv11}>
            <h1>YOUR CART IS EMPTY. LET'S START AN ORDER!</h1>
            <button id={styles.startbtn}>Start Order</button>
          </div>
          <div>
            {" "}
            <img
              src="https://online.kfc.co.in/static/media/empty_cart.32f17a45.png"
              alt="kfcCup"
            />
          </div>
        </div>
      ) : (
        <div id={styles.cartdiv2}>
          <div id={styles.items}>
            {/* **********************************maping data ************* */}
            {cartData.map((elem) => (
              <CartCard key={elem.id} {...elem} />
            ))}

            <div id={styles.R_all}>
              <div onClick={removeAll}>Remove All</div>
              <div onClick={() => navigate("/menu")}>Add More Menu</div>
            </div>
          </div>
          <div id={styles.subtotal}>
            <h1>{items}- ITEMS</h1>
            <div id={styles.offer}>
              {" "}
              <img src="https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg" />{" "}
              Offer Apply promo code
            </div>
            <div className="">
              <div className={styles.singlediv}>
                <p>Subtotal</p>
                <p>₹ {subtotal}</p>
              </div>
              <div className={styles.singlediv}>
                <p>GST</p>
                <p>₹ 19</p>
              </div>
            </div>
            <div className={styles.bag_hope}>
              <input type="checkbox" /> ₹ 6.00 Tick to add a large carry bag.
            </div>
            <div className={styles.bag_hope}>
              <input type="checkbox" /> Donate ₹ 5.00 Tick to Add Hope.
            </div>

            <div id={styles.checkoutbtn} onClick={() => navigate("/checkout")}>
              <p>Check Out</p>
              <p>₹{subtotal + 19}</p>
            </div>
          </div>
        </div>
      )}

      <div id={styles.faqDiv}>
        <div>
          <div>
            <h2>FAQ</h2>
          </div>
          <div>
            <p>
              How can I change the information for my credit/debit card or
              select a different default payment method?
            </p>
          </div>
          <div>
            <p>What to expect for delivery?</p>
          </div>
          <div>
            <p>
              How do I change or cancel my pickup order once I’ve placed my
              order?
            </p>
          </div>
        </div>
        <div>
          <div>
            <h2>STILL HAVE A QUESTION?</h2>
          </div>
          <div id={styles.haveQ}>
            <div>
              <i className="fa-solid fa-phone"></i> Call Us
            </div>
            <div onClick={() => navigate("/contacts")}>
              <i className="fa-solid fa-envelope"></i> Contact Us
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
