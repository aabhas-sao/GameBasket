import { DocumentData } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import ProductList from "../components/product/productList";
import { fetchNewArrivals } from "../firebase/products/readProducts";

const NewArrivals = () => {
  const [products, setProducts] = useState<DocumentData[]>([]);

  useEffect(() => {
    fetchNewArrivals().then((res) => setProducts(res));
  }, []);
  return <ProductList products={products} subcategory="New Arrivals" />;
};

export default NewArrivals;
