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
  const [loading, setLoading] = useState(false);

  const openLoading = useCallback(() => {
    setLoading(true);
  }, []);

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
