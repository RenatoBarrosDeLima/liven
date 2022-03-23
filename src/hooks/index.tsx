// Importação das bibliotecas do react
import React from "react";

// Importação de todos os hooks da aplicação
import { CartContextProvider } from "./useCart";
import { ToastContextProvider } from "./useToast";
import { LoadingContextProvider } from "./useLoading";

// Todos os hooks criados serão importados para a raiz do projeto, sendo assim eles poderão ser acessados de qualquer parte do sistema
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
