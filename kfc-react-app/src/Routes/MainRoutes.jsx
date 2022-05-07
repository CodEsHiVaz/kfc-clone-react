import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/g-components/cart/Cart";
import { Checkout } from "../components/g-components/Checkout/Checkout";
import { Final_page } from "../components/g-components/Final_Page/Final_page";
import { PaymentMethod } from "../components/g-components/paymentMethod/PaymentMethod";
import GroceryDetails from "../components/menupage";

export const MainRoutes = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homecontaint/>}>Home page</Route>
      <Route path="/deals" element={<Deals />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
       <Route path="/menu" element={<GroceryDetails />}></Route>
      <Route path="/cartcard" element={<CartCard />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/ordered" element={<Final_page />}></Route>
      <Route path="/Signin" element={<Signin/>}></Route>
      <Route path="/Otp" element={<Otp/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
};
