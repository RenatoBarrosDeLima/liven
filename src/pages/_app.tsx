import type { AppProps } from "next/app";

import Provider from "../hooks";

import "../../styles/globals.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Loading from "../components/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Header />
      <Component {...pageProps} />
      <Loading />
      <Footer />
    </Provider>
  );
}

export default MyApp;
