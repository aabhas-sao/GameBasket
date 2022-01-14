import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import baseUrl from "../constants/routes";
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
