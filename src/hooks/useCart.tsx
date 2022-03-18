import React, { createContext, useState, useCallback } from "react";

type CartType = {
  id: number;
  description: string;
  image: string;
  price: number;
  title: string;
};

type PropsCartContext = {
  counter: number;
  addCart: (data: CartType) => void;
  removeCart: () => void;
  removeItemCart: (item: number) => void;
  carts: CartType[];
};

const DEFAULT_VALUE = {
  counter: 0,
  addCart: () => null,
  removeCart: () => null,
  removeItemCart: () => null,
  carts: [],
};

const CartContext = createContext<PropsCartContext>(DEFAULT_VALUE);

const CartContextProvider: React.FC = ({ children }) => {
  const [carts, setCarts] = useState<CartType[]>([]);
  const [counter, setCounter] = useState(0);

  const addCart = useCallback(
    (data: CartType) => {
      const list = carts;
      list.push(data);
      setCarts(list);
      setCounter(list.length);
    },
    [carts]
  );

  const removeCart = useCallback(() => {
    setCarts(new Array());
    setCounter(0);
  }, [carts]);

  const removeItemCart = useCallback(
    (item: number) => {
      const list = carts;
      const cartIndex = list.findIndex((x) => x.id === item);
      if (cartIndex >= 0) list.splice(cartIndex, 1);
      setCarts(list);
      setCounter(list.length);
    },
    [carts]
  );

  return (
    <CartContext.Provider
      value={{
        counter,
        addCart,
        removeCart,
        removeItemCart,
        carts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;
