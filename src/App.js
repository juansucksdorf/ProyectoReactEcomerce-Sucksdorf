import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "@popperjs/core/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout"


function App() {

  
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner greeting="Bienvenidos!" />} />
          <Route path="/category/:categoryId" element={<ItemListConteiner />} />
          <Route path="/product/:productId" element={<ItemDetail />} />
          <Route path="/cart" element = {<Cart/>} />
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
