import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./containers//cart/Cart.js";

import Header from "./containers/Header.js";
import ProductDetail from "./containers/ProductDetail.js";
import ProductList from "./containers/ProductList.js";

export default function App() {
   return (
      <Router>
         <Header />

         <div style={{ marginTop: "7%" }}>
            <Routes>
               <Route path="/" element={<ProductList />} />
               <Route path="/product/:productId" element={<ProductDetail />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
         </div>
      </Router>
   );
}
