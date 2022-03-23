// Importação das bibliotecas do react
import React, { useState, useEffect } from "react";

// Importação dos componentes criados
import Navigation from "../Navigation";
import Product from "../Product";

interface HomeProps {
  products: any;
  menus: any;
}

const Home: React.FC<HomeProps> = ({ products, menus }) => {
  // Variável que armazena a lista de produtos a serem exibidas
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    setListProducts(products);
  }, [products]);

  return (
    <>
      {/* Chama o componente Navigation já passando as categorias e a função que atualiza a lista de produtos a serem exibidas  */}
      <Navigation menus={menus} setListProducts={setListProducts} />
      {/* Chama o componente Product já passando a lista de produtos a serem exibidas  */}
      <Product products={listProducts} />
    </>
  );
};

export default Home;
