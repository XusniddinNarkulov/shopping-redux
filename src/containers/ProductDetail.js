import { hover } from "@testing-library/user-event/dist/hover";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
   addToCartAction,
   // removeSelectedProduct,
   selectedProduct,
} from "../redux/actions/ProductAction";
import Loader from "./Loader";

export default function ProductDetail() {
   const dispatch = useDispatch();
   const { productId } = useParams();
   console.log(useParams());
   const product = useSelector((s) => s.selectedProductReducer);
   console.log(product);

   const fetchProductDetail = async () => {
      const response = await axios
         .get(`https://fakestoreapi.com/products/${productId}`)
         .catch((e) => console.log(e.message));
      dispatch(selectedProduct(response.data));
   };

   useEffect(() => {
      if (productId && productId !== "") {
         fetchProductDetail();
      }
      // return () => {
      //    dispatch(removeSelectedProduct());
      // };
   }, [productId]);

   const renderProduct = () => {
      const { id, title, category, description, image, price } = product;
      if (id) {
         return (
            <div
               className="ui  link cards"
               key={id}
               style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2%",
               }}
            >
               <div className="image" style={{ textAlign: "center" }}>
                  <img
                     src={image}
                     style={{ maxHeight: "80vh", maxWidth: "60%" }}
                  />
               </div>
               <div
                  className="card"
                  style={{ width: "90%", cursor: "default" }}
               >
                  <div className="image">{/* <img src={image} /> */}</div>
                  <div className="content">
                     <div className="header">{title}</div>
                     <div className="meta">
                        <a>{category}</a>
                     </div>
                     <div className="description">{description}</div>
                  </div>
                  <div
                     className="extra content"
                     style={{ color: "black", fontSize: "1.4rem" }}
                  >
                     <span
                        onClick={() => dispatch(addToCartAction(id))}
                        className="right floated purple"
                        style={{ cursor: "pointer" }}
                     >
                        ADD TO CART {""}
                        <i className="cart arrow down icon"></i>
                     </span>
                     <span>
                        {/* <i className="user icon"></i> */}
                        <b>{price} $</b>
                     </span>
                  </div>
               </div>
               //{" "}
            </div>
         );
      } else {
         return <Loader />;
      }
   };

   return <div>{renderProduct()}</div>;
}
