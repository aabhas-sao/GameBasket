import React, { useEffect, useState } from "react";
import ShowcaseContainer from "./showcaseContainer";
import baseUrl from "../../constants/routes";
import axios from "axios";

const ShowcaseCluster = () => {
  const [laptops, setLaptops] = useState<any[]>([...Array(4).keys()]);
  const [desktops, setDesktops] = useState<any[]>([...Array(4).keys()]);
  const [smartphones, setSmartphones] = useState<any[]>([...Array(4).keys()]);

  useEffect(() => {
    (async () => {
      const laptopRes = await axios.get(`${baseUrl}/products/laptops`);
      const desktopRes = await axios.get(`${baseUrl}/products/desktops`);
      const smartphoneRes = await axios.get(`${baseUrl}/products/smartphones`);
      await Promise.all([laptopRes, desktopRes, smartphoneRes]);

      setLaptops(laptopRes.data.slice(0, 4));
      setDesktops(desktopRes.data.slice(0, 4));
      setSmartphones(smartphoneRes.data.slice(0, 4));
    })();
  }, []);

  return (
    <div className="md:w-10/12 mx-auto md:pb-24 grid grid-cols-1 justify-items-center gap-y-10 lg:grid-cols-3">
      <ShowcaseContainer products={laptops} title="Laptops" />
      <ShowcaseContainer products={smartphones} title="Smartphones" />
      <ShowcaseContainer products={desktops} title="Desktops" />
    </div>
  );
};

export default ShowcaseCluster;
