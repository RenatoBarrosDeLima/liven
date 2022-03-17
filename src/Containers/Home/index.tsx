import React from "react";

import Navigation from "../Navigation";
import Product from "../Product";

interface HomeProps {
  products: any;
}

const Home: React.FC<HomeProps> = ({ products }) => {
  return (
    <>
      <Navigation />
      <Product products={products} />
    </>
  );
};

export default Home;
