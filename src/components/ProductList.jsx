import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
    {products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
