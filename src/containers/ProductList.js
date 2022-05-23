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
            <Link to={`/product/${id}`}>
               <div className="ui card" key={id}>
                  <div className="image">
                     <img src={image} style={{ height: "200px" }} />
                  </div>
                  <div className="content">
                     <p className="header">{title}</p>
                     <div className="meta">
                        <span className="date">{category}</span>
                     </div>
                     {/* <div className="description">{description}</div> */}
                  </div>
                  <div className="extra content">
                     <b>
                        <i>$ </i>
                        {price}
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
