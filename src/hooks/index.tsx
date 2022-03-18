import React from "react";

import { CartContextProvider } from "./useCart";

const GlobalContext: React.FC = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default GlobalContext;
