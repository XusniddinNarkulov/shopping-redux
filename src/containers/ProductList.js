import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../index.css";
import {
   addToCartAction,
   selectedProduct,
   setProduct,
} from "../redux/actions/ProductAction";
import { hover } from "@testing-library/user-event/dist/hover";

const ProductList = () => {
   const products = useSelector((s) => s.productReducer.products);
   const dispatch = useDispatch();
   console.log(products);

   const fetchProducts = async () => {
      const response = await axios
         .get("https://fakestoreapi.com/products")
         .catch((e) => console.log(e.message));
      console.log(response);
      dispatch(setProduct(response.data));
   };

   useEffect(() => {
      fetchProducts();
   }, []);

   const renderProducts = () => {
      return products.map((product) => {
         const { id, title, category, description, image, price } = product;
         return (
            <div
               key={id}
               className="ui card"
               style={{
                  // height: "440px",
                  display: "grid",
                  gridTemplateRows: "4fr 2fr 1fr",
               }}
            >
               <div
                  className="image"
                  style={{ backgroundColor: "white", padding: "3%" }}
               >
                  <img
                     src={image}
                     style={{ height: "200px", objectFit: "contain" }}
                  />
               </div>
               <Link to={`/product/${id}`}>
                  <div
                     className="content"
                     style={{
                        display: "grid",
                        gridTemplateRows: "50px",
                        padding: "2%",
                        // fontSize: "1rem",
                     }}
                  >
                     <p className="header" style={{ overflowX: "hidden" }}>
                        {title}
                     </p>
                     <div className="meta">
                        <span className="date">{category}</span>
                     </div>
                     {/* <div className="description">{description}</div> */}
                  </div>
               </Link>
               <div
                  className="extra content"
                  style={{
                     color: "black",
                     display: "grid",
                     gridTemplateColumns: "4fr 1fr ",
                     fontSize: "1.4rem",
                  }}
               >
                  <b>
                     <i>$ </i>
                     {price}
                  </b>
                  <b
                     className="purple"
                     onClick={() => {
                        dispatch(addToCartAction(id));
                     }}
                     style={{
                        cursor: "pointer",
                     }}
                  >
                     <i className="cart arrow down icon"></i>
                  </b>
               </div>
            </div>
         );
      });
   };

   return (
      <div className="list-grid">
         {/* <ProductComponents /> */}
         {renderProducts()}
      </div>
   );
};

export default ProductList;
