// Importação das bibliotecas do react
import React, { createContext, useState, useCallback } from "react";

type PropsLoadingContext = {
  loading: boolean;
  openLoading: () => void;
  closeLoading: () => void;
};

const DEFAULT_VALUE = {
  loading: false,
  openLoading: () => null,
  closeLoading: () => null,
};

const LoadingContext = createContext<PropsLoadingContext>(DEFAULT_VALUE);

const LoadingContextProvider: React.FC = ({ children }) => {
  // Variável que exibe o Loading Componente
  const [loading, setLoading] = useState(false);

  // Função que define a variável loading como true e exibe o loading
  const openLoading = useCallback(() => {
    setLoading(true);
  }, []);

  // Função que define a variável loading como false e para a exibição o loading
  const closeLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        openLoading,
        closeLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContextProvider };
export default LoadingContext;
