import React, { useState, useEffect } from "react";

import Navigation from "../Navigation";
import Product from "../Product";

interface HomeProps {
  products: any;
  menus: any;
}

const Home: React.FC<HomeProps> = ({ products, menus }) => {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    setListProducts(products);
  }, [products]);

  return (
    <>
      <Navigation menus={menus} setListProducts={setListProducts} />
      <Product products={listProducts} />
    </>
  );
};

export default Home;
