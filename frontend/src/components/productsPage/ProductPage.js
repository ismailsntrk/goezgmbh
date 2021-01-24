import React from "react";
import ProductCard from "../productCard/ProductCard";
import "./ProductPage.scss";
import ProductLabel from "../labelPicture/productLabel/ProductLabel";

const ProductPage = () => {
  return (
    <div>
      <ProductLabel></ProductLabel>
      <div>
        <div id="product-show">
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
