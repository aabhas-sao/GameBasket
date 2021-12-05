import { GetServerSideProps } from "next";
import React from "react";
import ProductDetails from "../components/productDetails";

// eslint-disable-next-line require-jsdoc
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
      title: context.query.id,
      image: context.query.image,
    }, // will be passed to the page component as props
  };
};

interface Props {
  id: string;
  title: string;
  image: string;
}

const ProductRoute: React.FC<Props> = ({ id, title, image }) => {
  console.log(id);
  return <ProductDetails image={image} title={title} />;
};

export default ProductRoute;
