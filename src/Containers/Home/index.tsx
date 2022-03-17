import React from "react";

import Navigation from "../Navigation";
import Product from "../Product";

interface HomeProps {
  products: any;
  menus: any;
}

const Home: React.FC<HomeProps> = ({ products, menus }) => {
  return (
    <>
      <Navigation menus={menus} />
      <Product products={products} />
    </>
  );
};

export default Home;
