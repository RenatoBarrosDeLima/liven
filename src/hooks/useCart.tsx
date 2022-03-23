// Importação das bibliotecas do react
import React, { createContext, useState, useCallback, useContext } from "react";
// Importação da bibliotecas do Axios
import axios from "axios";

// Importação das funções criadas
import { sum } from "../helpers/functions";

// Importação do hook de toast
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
  // Variável que exibe o Toast de notificação
  const { openToast } = useContext(ToastContext);
  // Variável armazena os items do carrinho para exibição no componente
  const [carts, setCarts] = useState<CartType[]>([]);
  // Variável que armazena a quantidade de items do carrinho
  const [counter, setCounter] = useState(0);
  // Variável que armazena o valor total do carrinho
  const [totalPrice, setTotalPrice] = useState(0);

  // Função que adiciona um item no carrinho e também adiciona na API fakestoreapi
  const addCart = useCallback(
    (data: CartType) => {
      const list = carts;
      list.push(data);

      // Dados do carrinho para salvar na fakestoreapi
      const body = {
        userId: 1914,
        date: new Date(),
        products: [{ productId: data.id, quantity: data.quantity }],
      };

      // Faz uma chamada na API, e mascara a url original por questão de segurança.
      // Irá salvar o item do carrinho na API dentro do diretório <src/pages/api/cart> tem a rota real que irá salvar, passando um POST com os dados do carrinho
      axios
        .post("/api/cart", { ...body })
        .then(({ status }) => {
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

      // Variável que armazena os items do carrinho para exibição no componente
      setCarts(list);
      // Variável que armazena a quantidade de items do carrinho
      setCounter(list.length);
      // Variável que armazena o valor total do carrinho
      setTotalPrice(sum(list));
    },
    [carts]
  );

  // Função que esvazia o carrinho
  const removeCart = useCallback(() => {
    // Variável que armazena os items do carrinho para exibição no componente
    setCarts(new Array());
    // Variável que armazena a quantidade de items do carrinho
    setCounter(0);
    // Variável que armazena o valor total do carrinho
    setTotalPrice(0);
  }, []);

  // Função que remove 1 item do carrinho
  const removeItemCart = useCallback(
    (item: number) => {
      const list = carts;
      // Pesquisa no carrinho o item clicado/selecionado
      const cartIndex = list.findIndex((x) => x.id === item);

      // Se for encontrado o item no carrinho então remove da exibição e da fakestoreapi
      if (cartIndex >= 0) list.splice(cartIndex, 1);

      // Faz uma chamada na API, e mascara a url original por questão de segurança.
      // Irá remover o item do carrinho na API dentro do diretório <src/pages/api/cart> tem a rota real que irá salvar, passando um DELETE com o ID do carrinho
      axios
        .delete("/api/cart", {
          params: {
            cartId: 10,
          },
        })
        .then(({ status }) => {
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

      // Variável que armazena os items do carrinho para exibição no componente
      setCarts(list);
      // Variável que armazena a quantidade de items do carrinho
      setCounter(list.length);
      // Variável que armazena o valor total do carrinho
      setTotalPrice(sum(list));
    },
    [carts]
  );

  // Função que atualizar a quantidade do item do carrinho em +1
  const addQuantityItemCart = useCallback(
    (item: number) => {
      const list = carts;
      // Pesquisa no carrinho o item clicado/selecionado
      const cartIndex = list.findIndex((x) => x.id === item);
      list[cartIndex].quantity++;

      // Dados do carrinho para atualizar na fakestoreapi
      const body = {
        cartId: 10,
        userId: 1914,
        date: new Date(),
        products: [
          { productId: list[cartIndex].id, quantity: list[cartIndex].quantity },
        ],
      };

      // Faz uma chamada na API, e mascara a url original por questão de segurança.
      // Irá atualizar o item do carrinho na API dentro do diretório <src/pages/api/cart> tem a rota real que irá salvar, passando um PUT com os dados do carrinho
      axios
        .put("/api/cart", { ...body })
        .then(({ status }) => {
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

      // Variável que armazena os items do carrinho para exibição no componente
      setCarts(list);
      // Variável que armazena o valor total do carrinho
      setTotalPrice(sum(list));
    },
    [carts]
  );

  // Função que atualizar a quantidade do item do carrinho em -1
  const removeQuantityItemCart = useCallback(
    (item: number) => {
      const list = carts;
      // Pesquisa no carrinho o item clicado/selecionado
      const cartIndex = list.findIndex((x) => x.id === item);

      // Dados do carrinho para atualizar na fakestoreapi
      const body = {
        cartId: 10,
        userId: 1914,
        date: new Date(),
        products: [
          { productId: list[cartIndex].id, quantity: list[cartIndex].quantity },
        ],
      };

      // Faz uma chamada na API, e mascara a url original por questão de segurança.
      // Irá atualizar o item do carrinho na API dentro do diretório <src/pages/api/cart> tem a rota real que irá salvar, passando um PUT com os dados do carrinho
      axios
        .put("/api/cart", { ...body })
        .then(({ status }) => {
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
      // Remove uma quantidade do carrinho
      list[cartIndex].quantity--;
      // Se a quantidade for 0 então remove o item
      if (list[cartIndex].quantity === 0) {
        list.splice(cartIndex, 1);
      }

      // Variável que armazena os items do carrinho para exibição no componente
      setCarts(list);
      // Variável que armazena o valor total do carrinho
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
