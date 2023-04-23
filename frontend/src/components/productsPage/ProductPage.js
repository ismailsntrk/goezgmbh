import React from "react";
import ProductCard from "../productCard/ProductCard";
import "./ProductPage.scss";
import ProductLabel from "../labelPicture/productLabel/ProductLabel";
const ProductPage = () => {
  return (
    <div>
      <ProductLabel></ProductLabel>
      <div>
        
        
          <ProductCard></ProductCard>
        
          
        
      </div>
    </div>
  );
};

export default ProductPage;
