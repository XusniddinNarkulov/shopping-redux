import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//    itemQuantityAction,
//    removeFromCartAction,
// } from "../redux/actions/ProductAction";
import CartItem from "./CartItem";

export default function Cart() {
   const state = useSelector((s) => s);
   console.log(state);
   const cart = state.productReducer.cart;

   const [totalPrice, setTotalPrice] = useState(0);
   const [totalItem, setTotalItem] = useState(0);
   const [qty, setQty] = useState(1);

   const dispatch = useDispatch();

   useEffect(() => {
      let items = 0;
      let price = 0;

      cart.forEach((item) => {
         items += item.quantity;
         price += item.quantity * item.price;
      });

      setTotalItem(items);
      setTotalPrice(price);
   }, [cart, totalPrice, totalItem]);

   return (
      <div
         style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            padding: "1%",
            gap: "2%",
         }}
      >
         <div
            className="ui divided items"
            style={{ height: "75vh", overflowX: "scroll" }}
         >
            <CartItem />
         </div>
         <div
            className="card"
            style={{
               boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.2)",
               padding: "3%",
            }}
         >
            <div className="content">
               <div className="header">Cart Summary</div>
               <div
                  className="meta"
                  style={{
                     display: "flex",
                     justifyContent: "space-evenly",
                     fontSize: "1.4rem",
                  }}
               >
                  <p>Total:</p>
                  <p>{totalItem} item</p>
                  <p>{totalPrice} $</p>
               </div>
               <div className="description">
                  Elliot requested permission to view your contact details
               </div>
            </div>
            <div className="extra content">
               <div className="ui two buttons">
                  <div className="ui basic green button">Approve</div>
                  <div className="ui basic red button">Decline</div>
               </div>
            </div>
         </div>
      </div>
   );
}
