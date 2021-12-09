import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import ProductDetails from "../components/productDetails";
import { fetchProduct } from "../firebase/products/readProducts";

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
  const pid = id as string;
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    if (!id) {
      return;
    }
    console.log(id, "iddd");
    fetchProduct(pid).then((res) => {
      setProduct(res);
    });
  }, [id]);

  const { image, title, price } = product;

  return <ProductDetails image={image} title={title} price={price} />;
};

export default ProductRoute;
