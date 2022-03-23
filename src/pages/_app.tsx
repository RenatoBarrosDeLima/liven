// Importação da biblioteca do next
import type { AppProps } from "next/app";
// Importação da biblioteca do next-seo
import { DefaultSeo } from "next-seo";

// Importação dos componentes criados
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Loading from "../Components/Loading";
import Toast from "../Components/Toast";

// Importação de todos os hooks criados direto na raiz da aplicação, sendo assim todo o sistema terar acesso a eles
import Provider from "../hooks";

// Importação do CSS global
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <DefaultSeo
        defaultTitle="Liven Ecommerce"
        canonical="https://liven-ecommerce.herokuapp.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2489cadd.png&w=256&q=75"
      />
      <Header />
      <Component {...pageProps} />
      <Loading />
      <Toast />
      <Footer />
    </Provider>
  );
}

export default MyApp;
