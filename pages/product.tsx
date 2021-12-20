import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProductDetails from "../components/product/productDetails";
// import { fetchProduct } from "../firebase/products/readProducts";
import dummyData from "../testData/products.json";

// eslint-disable-next-line require-jsdoc
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
    }, // will be passed to the page component as props
  };
};

interface Props {
  id: string;
}

const ProductRoute: React.FC<Props> = () => {
  const router = useRouter();
  const { id } = router.query;
  // const pid = id as string;
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    if (!id) {
      return;
    }
    const idStringOnly = id as string;

    setProduct(dummyData[parseInt(idStringOnly) - 1]);
    // fetchProduct(pid).then((res) => {
    //   setProduct(res);
    // });
  }, [id]);

  return <ProductDetails {...product} />;
};

export default ProductRoute;
