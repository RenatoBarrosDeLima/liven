import Home from "../Containers/Home";
import api from "../services/api";

const Page = ({ products }: any) => {
  return <Home products={products} />;
};

export const getServerSideProps = async () => {
  try {
    const { data: products } = await api.get("products");

    return { props: { products } };
  } catch (e) {
    return { props: { products: [] } };
  }
};

export default Page;
