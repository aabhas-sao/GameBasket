import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import baseUrl from "../constants/routes";
import getCart from "../functions/cart";
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
      try {
        const client = axios.create({
          baseURL: baseUrl,
          withCredentials: true,
        });

        client.interceptors.response.use(
          async (res) => {
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

              const reduxItems = await getCart(id);

              dispatch(
                initialize({ count: reduxItems.length, items: reduxItems })
              );
            }
          },
          (e) => {
            return;
          }
        );

        await client.get("/auth");
      } catch (e) {}
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
