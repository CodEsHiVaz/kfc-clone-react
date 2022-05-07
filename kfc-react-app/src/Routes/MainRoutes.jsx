import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/g-components/cart/Cart";
import { Checkout } from "../components/g-components/Checkout/Checkout";
import { Final_page } from "../components/g-components/Final_Page/Final_page";
import Navbar from "../components/shhivajiscompo/navbar/Navbar"
import Footer from "../components/shhivajiscompo/footer/Footer"
import Homecontaint from "../components/shhivajiscompo/homecontaint/Homecontaint";
import {About} from "../components/surya_ components/About/About"
import {Deals} from "../components/surya_ components/Deals/Deals"
import { Signin } from "../components/m-components/Signin";
import { Otp } from "../components/m-components/Otp";
// import GroceryItem from "../components/menuitem";
import GroceryDetails from "../components/menupage";

export const MainRoutes = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homecontaint/>}>Home page</Route>
      <Route path="/deals" element={<Deals />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
       <Route path="/menu" element={<GroceryDetails />}></Route>
      <Route path="/contactUs" element={"<contactUs />"}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/ordered" element={<Final_page />}></Route>
      <Route path="/Signin" element={<Signin/>}></Route>
      <Route path="/Otp" element={<Otp/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
};