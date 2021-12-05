import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomButton from "../../components/customButton";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

// const data = [
//   {
//     name: "Pixel 6 Pro",
//     price: "$400",
//     id: 1,
//     src: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     category: "electronics",
//     subcategory: "mobiles",
//   },
//   {
//     name: "Pixel 6 Pro",
//     price: "$400",
//     id: 2,
//     src: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     category: "electronics",
//     subcategory: "mobiles",
//   },
//   {
//     name: "Pixel 6 Pro",
//     price: "$400",
//     id: 3,
//     src: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     category: "electronics",
//     subcategory: "mobiles",
//   },
//   {
//     name: "Pixel 6 Pro",
//     price: "$400",
//     id: 4,
//     src: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
//     category: "electronics",
//     subcategory: "mobiles",
//   },
// ];

const ProductList = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [products, setProducts] = useState<any[]>([]);

  const subcategory: string = pid as string;

  useEffect(() => {
    if (!pid) {
      return;
    }
    (async () => {
      const productsRef = collection(db, "products");
      const q = query(
        productsRef,
        where("subcategory", "==", subcategory.toLowerCase())
      );
      const querySnapshot = await getDocs(q);
      const prodlocal: any[] = [];

      querySnapshot.forEach((doc) => {
        const obj = doc.data();
        const { category, subcategory, price, brand, title, image } = obj;
        const item: any = {
          id: doc.id,
          category,
          subcategory,
          price,
          brand,
          title,
          image,
        };
        prodlocal.push(item);
      });

      console.log("hey");

      if (prodlocal.length != products.length) setProducts(prodlocal);
    })();
  }, [pid]);

  return (
    <div className="container filler">
      <h1 className="text-center gray-700 text-xl my-4 md:my-8 md:text-2xl font-bold">
        Showing results for {pid}
      </h1>
      <div className="divide-y divide-gray-300">
        {products.map((product) => (
          <article
            className="flex mt-3 pt-4 flex-col md:flex-row p-2 md:p-4 md:w-4/5 mx-auto justify-evenly"
            key={product.id}
          >
            <div className="flex md:w-2/3 flex-row">
              <img className="w-20 md:w-32 " src={`${product.image}`} />
              <div className="w-2/3  flex text-sm flex-col ml-4 md:ml-8 flex-2">
                <div className="text-xs my-auto ">
                  <Link
                    href={{
                      pathname: "/product",
                      query: {
                        id: product.id,
                        title: product.title,
                        image: product.image,
                      },
                    }}
                  >
                    <a className="text-blue-700">
                      <p className="line-clamp-2">{product.title}</p>
                    </a>
                  </Link>
                  <p className="md:hidden mt-1 text-sm font-medium">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col justify-around">
              <div className="text-lg md:text-2xl font-bold">
                ₹{product.price}
              </div>
              <CustomButton title="add to cart" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
