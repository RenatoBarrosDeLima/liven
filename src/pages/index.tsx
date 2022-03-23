// Importação do componente Home
import Home from "../containers/Home";
// Importação da instância da API
import api from "../services/api";

const Page = ({ products, menus }: any) => {
  // Chama o componente já passando os produtos e as categorias da API fakestoreapi
  return <Home products={products} menus={menus} />;
};

// Uso do Server-side rendering (SSR), já faz as requisições dos produtos e dos menus no lado do servidor
export const getServerSideProps = async () => {
  try {
    // Faz a consulta dos produtos na API fakestoreapi e atribui em uma constante chamada products
    const { data: products } = await api.get("products");

    // Faz a consulta das categorias na API fakestoreapi e atribui em uma constante chamada menus
    const { data: menus } = await api.get("products/categories");

    return { props: { products, menus } };
  } catch (e) {
    // Caso dê algum problema a API os produtos e os menus irão ser vazios
    return { props: { products: [], menus: [] } };
  }
};

export default Page;
