import "../../styles/globals.css";
import "../../styles/header.css";

import type { AppProps } from "next/app";

import Header from "../layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
