import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductList from "../../components/product/productList";
import axios from "axios";
import baseUrl from "../../constants/routes";

const ProductDynamicPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [products, setProducts] = useState<any[]>([]);
  const subcategory: string = pid as string;

  useEffect(() => {
    if (!pid) {
      return;
    }

    (async () => {
      console.log(subcategory);
      const productsRes = await axios.get(`${baseUrl}/products/${subcategory}`);

      console.log(productsRes.data);
      setProducts(productsRes.data);
    })();
  }, [pid]);

  return <ProductList products={products} subcategory={subcategory} />;
};

export default ProductDynamicPage;
