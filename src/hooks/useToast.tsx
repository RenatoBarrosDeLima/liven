import React, { createContext, useState, useCallback } from "react";

type PropsToastContext = {
  msg: string;
  openToast: (msg: string) => void;
};

const DEFAULT_VALUE = {
  msg: "",
  openToast: () => null,
};

const ToastContext = createContext<PropsToastContext>(DEFAULT_VALUE);

const ToastContextProvider: React.FC = ({ children }) => {
  const [msg, setMsg] = useState("");

  const openToast = useCallback((msg) => {
    setMsg(msg);

    var x = document.getElementById("toast")!;
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        msg,
        openToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContextProvider };
export default ToastContext;
