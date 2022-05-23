import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
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
            <h1>Shopping</h1>
         </div>

         <div className="item">
            <Link to="/">List</Link>
            {/* <a className="item">Features</a>
            <a className="item">Testimonials</a>
            <a className="item">Sign-in</a> */}
         </div>

         <div className="item">
            <div className="ui vertical animated button" tabIndex="0">
               <div className="hidden content">Shop</div>
               <div className="visible content">
                  <i className="shop icon"></i>
               </div>
            </div>
         </div>
      </div>
   );
}
