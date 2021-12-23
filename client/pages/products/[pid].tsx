import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/firebase";
import ProductList from "../../components/product/productList";
import dummyData from "../../testData/products.json";

const ProductDynamicPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [products, setProducts] = useState<any[]>([]);
  const subcategory: string = pid as string;

  useEffect(() => {
    if (!pid) {
      return;
    }
    // (async () => {
    //   const productsRef = collection(db, "products");
    //   const q = query(
    //     productsRef,
    //     where("subcategory", "==", subcategory.toLowerCase())
    //   );
    //   const querySnapshot = await getDocs(q);
    //   const prodlocal: any[] = [];

    //   querySnapshot.forEach((doc) => {
    //     const obj = doc.data();
    //     const { category, subcategory, price, brand, title, image } = obj;
    //     const item: any = {
    //       id: doc.id,
    //       category,
    //       subcategory,
    //       price,
    //       brand,
    //       title,
    //       image,
    //     };
    //     prodlocal.push(item);
    //   });

    //   if (prodlocal.length != products.length) setProducts(prodlocal);
    // })();
    setProducts(dummyData);
  }, [pid]);

  return <ProductList products={products} subcategory={subcategory} />;
};

export default ProductDynamicPage;
