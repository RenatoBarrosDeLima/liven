import React, { createContext, useState, useCallback } from "react";

import { sum } from "../helpers/functions";

type CartType = {
  id: number;
  description: string;
  image: string;
  price: number;
  title: string;
};

type PropsCartContext = {
  counter: number;
  totalPrice: number;
  carts: CartType[];
  addCart: (data: CartType) => void;
  removeCart: () => void;
  removeItemCart: (item: number) => void;
};

const DEFAULT_VALUE = {
  counter: 0,
  totalPrice: 0,
  carts: [],
  addCart: () => null,
  removeCart: () => null,
  removeItemCart: () => null,
};

const CartContext = createContext<PropsCartContext>(DEFAULT_VALUE);

const CartContextProvider: React.FC = ({ children }) => {
  const [carts, setCarts] = useState<CartType[]>([]);
  const [counter, setCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addCart = useCallback(
    (data: CartType) => {
      const list = carts;
      list.push(data);
      setCarts(list);
      setCounter(list.length);
      setTotalPrice(sum(list));
    },
    [carts]
  );

  const removeCart = useCallback(() => {
    setCarts(new Array());
    setCounter(0);
    setTotalPrice(sum(0));
  }, [carts]);

  const removeItemCart = useCallback(
    (item: number) => {
      const list = carts;
      const cartIndex = list.findIndex((x) => x.id === item);
      if (cartIndex >= 0) list.splice(cartIndex, 1);
      setCarts(list);
      setCounter(list.length);
      setTotalPrice(sum(list));
    },
    [carts]
  );

  return (
    <CartContext.Provider
      value={{
        counter,
        totalPrice,
        carts,
        addCart,
        removeCart,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;