import { GetServerSideProps } from "next";
import React from "react";
import ProductDetails from "../components/productDetails";

// eslint-disable-next-line require-jsdoc
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { id: context.query.id }, // will be passed to the page component as props
  };
};

interface Props {
  id: string;
}

const ProductRoute: React.FC<Props> = ({ id }) => {
  console.log(id);
  return <ProductDetails />;
};

export default ProductRoute;
