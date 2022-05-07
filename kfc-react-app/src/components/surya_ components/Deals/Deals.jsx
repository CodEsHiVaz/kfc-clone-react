import React from "react";
import "./deals.css";
export const Deals = () => {
  return (
    <div className="address">
      <div className="banner">
      <div class="deals-image-text">DEALS & OFFERS</div>
      </div>

      <div className="stripes">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAeCAYAAAB5c901AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgB7c9BDQAgAMPAgQ4c4F8KDvABFuBHSe+9LGmZ6SsXWkY52b3yW/M5A+kMpDOQzkA6A+kMpDOQzkA6A+kMpDOQzkA6A+kMpNu9MQhKmC+cDgAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <h1 className="offertitle">OFFERS FOR YOU</h1>
      <div className="hotncrispy">
        <img
          src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg"
          className="offers-menu-product-image"
        />
        <h4 className="offers-deals-product-title">1 Pc free Chicken... </h4>
        <h5 className="offers-deals-product-desc">
          1 Pc free Chicken Zinger on a cart value of 399 or above on first
          order. Only for registered users.
        </h5>
        <div className="hotncrispydiv">
          <button className="view-details-btn">View Details</button>
          <button className="redeem-btn">Redeem</button>
        </div>
      </div>
    </div>
  );
};
