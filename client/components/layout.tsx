import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import baseUrl from "../constants/routes";
import { initialize } from "../redux/features/cart/cartSlice";
import { login } from "../redux/features/userSlice";
import Footer from "./footer";
import Navbar from "./navbar/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${baseUrl}/auth`, { withCredentials: true });

      if (res.status === 200) {
        // eslint-disable-next-line camelcase
        const { email, first_name, last_name, id, address } = res.data;
        const payload = {
          email,
          firstName: first_name,
          lastName: last_name,
          uid: id,
          address,
        };

        dispatch(login(payload));

        const cart = await axios.get(`${baseUrl}/cart`, {
          withCredentials: true,
        });
        const items = cart.data.data;

        console.log(items);

        const reduxItems = items.map(({ count, product }: any) => ({
          count,
          product: {
            id: product.id,
            image: product.image_link,
            price: product.price,
            title: product.title,
          },
        }));

        dispatch(initialize({ count: items.length, items: reduxItems }));
      }
    })();
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
