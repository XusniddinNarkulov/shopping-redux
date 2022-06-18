import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../index.css";
import ProductComponents from "./ProductComponents";
import { selectedProduct, setProduct } from "../redux/actions/ProductAction";

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
            <Link to={`/product/${id}`} key={id}>
               <div
                  className="ui card"
                  style={{
                     // height: "440px",
                     display: "grid",
                     gridTemplateRows: "4fr 2fr 1fr",
                  }}
               >
                  <div className="image">
                     <img
                        src={image}
                        style={{ height: "200px", objectFit: "contain" }}
                     />
                  </div>
                  <div
                     className="content"
                     style={{ display: "grid", gridTemplateRows: "50px" }}
                  >
                     <p className="header" style={{ overflowX: "hidden" }}>
                        {title}
                     </p>
                     <div className="meta">
                        <span className="date">{category}</span>
                     </div>
                     {/* <div className="description">{description}</div> */}
                  </div>
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
                     <b>
                        <i className="cart arrow down icon"></i>
                     </b>
                  </div>
               </div>
            </Link>
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
