import Home from "../containers/Home";
import api from "../services/api";

const Page = ({ products, menus }: any) => {
  return <Home products={products} menus={menus} />;
};

export const getServerSideProps = async () => {
  try {
    const { data: products } = await api.get("products");
    const { data: menus } = await api.get("products/categories");

    return { props: { products, menus } };
  } catch (e) {
    return { props: { products: [], menus: [] } };
  }
};

export default Page;
