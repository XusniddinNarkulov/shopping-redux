import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
   const state = useSelector((s) => s);
   const cart = state.productReducer.cart;

   const [totalItem, setTotalItem] = useState(0);

   useEffect(() => {
      let qty = 0;
      cart.forEach(({ quantity }) => {
         qty += quantity;
      });
      setTotalItem(qty);
   }, [cart, totalItem]);

   return (
      <div
         className="ui stackable menu"
         style={{
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            top: "0",
            left: "0",
            width: "130%",
            zIndex: "1",
         }}
      >
         <div className="item">
            <Link to="/">
               <h1>Shopping</h1>
            </Link>
         </div>

         <div className="item">
            <Link to="/">List</Link>
            {/* <a className="item">Features</a>
            <a className="item">Testimonials</a>
            <a className="item">Sign-in</a> */}
         </div>

         <div className="item">
            <Link to="/cart">
               <div className="ui button" tabIndex="0">
                  {/* <div className="hidden content">Shop</div> */}
                  <div className=" content">
                     <i className="shop icon"></i>
                     <span>{totalItem}</span>
                  </div>
               </div>
            </Link>
            {/* <div className="item">
               <div className="ui primary button">Sign up</div>
            </div>
            <div className="item">
               <div className="ui button">Log-in</div>
            </div> */}
         </div>
      </div>
   );
}
