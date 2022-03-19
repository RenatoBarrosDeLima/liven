import React, { createContext, useState, useCallback, useContext } from "react";
import axios from "axios";

import { sum } from "../helpers/functions";
import ToastContext from "./useToast";

type CartType = {
  id: number;
  description: string;
  image: string;
  price: number;
  title: string;
  quantity: number;
};

type PropsCartContext = {
  counter: number;
  totalPrice: number;
  carts: CartType[];
  addCart: (data: CartType) => void;
  removeCart: () => void;
  removeItemCart: (item: number) => void;
  addQuantityItemCart: (item: number) => void;
  removeQuantityItemCart: (item: number) => void;
};

const DEFAULT_VALUE = {
  counter: 0,
  totalPrice: 0,
  carts: [],
  addCart: () => null,
  removeCart: () => null,
  removeItemCart: () => null,
  addQuantityItemCart: () => null,
  removeQuantityItemCart: () => null,
};

const CartContext = createContext<PropsCartContext>(DEFAULT_VALUE);

const CartContextProvider: React.FC = ({ children }) => {
  const { openToast } = useContext(ToastContext);
  const [carts, setCarts] = useState<CartType[]>([]);
  const [counter, setCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addCart = useCallback(
    (data: CartType) => {
      const list = carts;
      list.push(data);

      const body = {
        userId: 1914,
        date: new Date(),
        products: [{ productId: data.id, quantity: data.quantity }],
      };

      axios
        .post("/api/cart", { ...body })
        .then(({ status, data }) => {
          if (status === 200) {
            openToast("Carrinho adicionado com sucesso");
          } else {
            openToast(
              "Tivemos um problema ao salvar o carrinho, tente novamente"
            );
          }
        })
        .catch(() => {
          openToast(
            "Tivemos um problema ao salvar o carrinho, tente novamente"
          );
        });

      setCarts(list);
      setCounter(list.length);
      setTotalPrice(sum(list));
    },
    [carts]
  );

  const removeCart = useCallback(() => {
    setCarts(new Array());
    setCounter(0);
    setTotalPrice(0);
  }, []);

  const removeItemCart = useCallback(
    (item: number) => {
      const list = carts;
      const cartIndex = list.findIndex((x) => x.id === item);

      if (cartIndex >= 0) list.splice(cartIndex, 1);
      console.log("entrou aqui");
      axios
        .delete("/api/cart", {
          params: {
            cartId: 10,
          },
        })
        .then(({ status, data }) => {
          if (status === 200) {
            openToast("Carrinho deletado com sucesso");
          } else {
            openToast(
              "Tivemos um problema ao deletar o carrinho, tente novamente"
            );
          }
        })
        .catch(() => {
          openToast(
            "Tivemos um problema ao deletar o carrinho, tente novamente"
          );
        });

      setCarts(list);
      setCounter(list.length);
      setTotalPrice(sum(list));
    },
    [carts]
  );

  const addQuantityItemCart = useCallback(
    (item: number) => {
      const list = carts;
      const cartIndex = list.findIndex((x) => x.id === item);
      list[cartIndex].quantity++;

      const body = {
        cartId: 10,
        userId: 1914,
        date: new Date(),
        products: [
          { productId: list[cartIndex].id, quantity: list[cartIndex].quantity },
        ],
      };

      axios
        .put("/api/cart", { ...body })
        .then(({ status, data }) => {
          if (status === 200) {
            openToast("Carrinho atualizado com sucesso");
          } else {
            openToast(
              "Tivemos um problema ao atualizar o carrinho, tente novamente"
            );
          }
        })
        .catch(() => {
          openToast(
            "Tivemos um problema ao atualizar o carrinho, tente novamente"
          );
        });

      setCarts(list);
      setTotalPrice(sum(list));
    },
    [carts]
  );

  const removeQuantityItemCart = useCallback(
    (item: number) => {
      const list = carts;
      const cartIndex = list.findIndex((x) => x.id === item);
      list[cartIndex].quantity--;
      if (list[cartIndex].quantity === 0) {
        list.splice(cartIndex, 1);
      }
      const body = {
        cartId: 10,
        userId: 1914,
        date: new Date(),
        products: [
          { productId: list[cartIndex].id, quantity: list[cartIndex].quantity },
        ],
      };

      axios
        .put("/api/cart", { ...body })
        .then(({ status, data }) => {
          if (status === 200) {
            openToast("Carrinho atualizado com sucesso");
          } else {
            openToast(
              "Tivemos um problema ao atualizar o carrinho, tente novamente"
            );
          }
        })
        .catch(() => {
          openToast(
            "Tivemos um problema ao atualizar o carrinho, tente novamente"
          );
        });

      setCarts(list);
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
        addQuantityItemCart,
        removeQuantityItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;
