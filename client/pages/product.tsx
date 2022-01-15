import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProductDetails from "../components/product/productDetails";
import baseUrl from "../constants/routes";

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
    console.log(router.isReady);
    if (!router.isReady) {
      return;
    }
    const idStringOnly = id as string;

    (async () => {
      const res = await axios.get(`${baseUrl}/products/?id=${idStringOnly}`);
      console.log("Data", res.data);
      setProduct(res.data);
    })();
  }, [router.isReady]);

  return router.isReady ? (
    <ProductDetails id={id} image={product.image_link} {...product} />
  ) : (
    <></>
  );
};

export default ProductRoute;
