import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
   removeSelectedProduct,
   selectedProduct,
} from "../redux/actions/ProductAction";

export default function ProductDetail() {
   const dispatch = useDispatch();
   const { productId } = useParams();
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
      return () => {
         dispatch(removeSelectedProduct());
      };
   }, [productId]);

   const renderProduct = () => {
      const { id, title, category, description, image, price } = product;
      if (id) {
         return (
            <div
               className="ui  container"
               key={id}
               style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  alignItems: "center",
                  gap: "2%",
               }}
            >
               <div className="image">
                  <img
                     src={image}
                     style={{ maxHeight: "80vh", maxWidth: "60%" }}
                  />
               </div>

               <div>
                  <div className="content">
                     <p className="header">{title}</p>
                     <div className="meta">
                        <span className="date">{category}</span>
                     </div>
                     <div className="description">{description}</div>
                  </div>
                  <div className="extra content">
                     <b>
                        <i>$ </i>
                        {price}
                     </b>
                  </div>
               </div>
            </div>
         );
      } else {
         return <h1>...Loading</h1>;
      }
   };

   return <div>{renderProduct()}</div>;
}
