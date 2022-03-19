import React from "react";

import { CartContextProvider } from "./useCart";
import { LoadingContextProvider } from "./useLoading";

const GlobalContext: React.FC = ({ children }) => {
  return (
    <LoadingContextProvider>
      <CartContextProvider>{children}</CartContextProvider>
    </LoadingContextProvider>
  );
};

export default GlobalContext;
