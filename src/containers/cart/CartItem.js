import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
   removeFromCartAction,
   itemQuantityAction,
} from "../../redux/actions/ProductAction";

export default function CartItem() {
   const state = useSelector((s) => s);
   const cart = state.productReducer.cart;

   const dispatch = useDispatch();

   const [input, setInput] = useState();

   return cart.map(
      ({
         category,
         description,
         id,
         image,
         price,
         quantity,
         rating,
         title,
      }) => {
         return (
            <div
               key={id}
               className="item"
               style={{
                  boxShadow: "0 2px 5px 1px rgba(0, 0, 0, 0.2)",
                  display: "grid",
                  gridTemplateColumns: "1fr 3fr",
                  gap: "1rem",
                  alignItems: "center",
                  // height: "200px",
               }}
            >
               <div className="image" style={{ objectFit: "contain" }}>
                  <img
                     src={image}
                     style={{ objectFit: "contain", padding: "10%" }}
                  />
               </div>
               <div className="content">
                  <a className="header">{title}</a>
                  <div className="meta">
                     <span className="cinema">{category}</span>
                  </div>
                  <div className="description">
                     <p></p>
                  </div>
                  <div
                     className="extra"
                     style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.4rem",
                        color: "black",
                     }}
                  >
                     <div className="">{price} $</div>
                     <div>
                        <label>Quantity: </label>
                        <input
                           type="number"
                           min="1"
                           value={quantity}
                           onChange={(e) => {
                              setInput(() => e.target.value);
                              dispatch(itemQuantityAction(id, +e.target.value));
                           }}
                           style={{ width: "50px" }}
                        />
                     </div>
                     <div
                        className="ui basic button red"
                        onClick={() => dispatch(removeFromCartAction(id))}
                     >
                        <i className="trash icon red"></i>
                     </div>
                  </div>
               </div>
            </div>
         );
      }
   );
}
