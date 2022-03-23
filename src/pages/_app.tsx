// Importação da biblioteca do next
import type { AppProps } from "next/app";

// Importação dos componentes criados
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Loading from "../components/Loading";
import Toast from "../components/Toast";

// Importação de todos os hooks criados direto na raiz da aplicação, sendo assim todo o sistema terar acesso a eles
import Provider from "../hooks";

// Importação do CSS global
import "../../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Header />
      <Component {...pageProps} />
      <Loading />
      <Toast />
      <Footer />
    </Provider>
  );
}

export default MyApp;
