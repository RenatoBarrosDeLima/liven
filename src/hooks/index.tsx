import React from "react";

import { CartContextProvider } from "./useCart";
import { LoadingContextProvider } from "./useLoading";
import { ToastContextProvider } from "./useToast";

const GlobalContext: React.FC = ({ children }) => {
  return (
    <ToastContextProvider>
      <LoadingContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </LoadingContextProvider>
    </ToastContextProvider>
  );
};

export default GlobalContext;
