import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { selectedProduct } from "../redux/actions/ProductAction";

export default function ProductDetail() {
   const dispatch = useDispatch();
   const productId = Number(useParams());
   console.log(productId);
   const products = useSelector((s) => s.productReducer.products);

   const renderProduct = () => {
      return products.map((product) => {
         // dispatch(selectedProduct(product));

         const { id, title, category, description, image, price } = product;
         if (productId === id) {
            return (
               <div className="ui card" key={id}>
                  <div className="image">
                     <img src={image} style={{ height: "200px" }} />
                  </div>
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
            );
         }
      });
   };
   return <div>{renderProduct()}</div>;
}
