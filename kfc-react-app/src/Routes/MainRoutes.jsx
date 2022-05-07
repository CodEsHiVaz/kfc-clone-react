import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/g-components/cart/Cart";
import { CartCard } from "../components/g-components/cartcard/CartCard";
import { Checkout } from "../components/g-components/Checkout/Checkout";
import { Final_page } from "../components/g-components/Final_Page/Final_page";
import { PaymentMethod } from "../components/g-components/paymentMethod/PaymentMethod";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/">Home page</Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/cartcard" element={<CartCard />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/paymentmethod" element={<PaymentMethod />}></Route>
      <Route path="/ordered" element={<Final_page />}></Route>

    </Routes>
  );
};
