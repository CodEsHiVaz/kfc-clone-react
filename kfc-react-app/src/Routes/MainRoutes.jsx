import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/g-components/cart/Cart";
import { CartCard } from "../components/g-components/cartcard/CartCard";
import { Checkout } from "../components/g-components/Checkout/Checkout";
import { Final_page } from "../components/g-components/Final_Page/Final_page";
import { PaymentMethod } from "../components/g-components/paymentMethod/PaymentMethod";
import Navbar from "../components/shhivajiscompo/navbar/Navbar"
import Footer from "../components/shhivajiscompo/footer/Footer"
import Homecontaint from "../components/shhivajiscompo/homecontaint/Homecontaint";
import Directtodeal from "../components/shhivajiscompo/Onemoreblack/Directtodeal";

export const MainRoutes = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homecontaint/>}>Home page</Route>
      <Route path="/deals" element={<Directtodeal />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/cartcard" element={<CartCard />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/paymentmethod" element={<PaymentMethod />}></Route>
      <Route path="/ordered" element={<Final_page />}></Route>

    </Routes>
    <Footer/>
    </>
  );
};
