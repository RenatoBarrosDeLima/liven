// Importação das bibliotecas do react
import type { NextApiRequest, NextApiResponse } from "next";

// Importação da instância do AXIO, chamada api
import api from "../../services/api";

type Data = {
  name: string;
};

// Essas são as rotas verdadeiras da fakestoreapi, as chamadas nos hooks são as rotas mascaradas <src\hooks\useCart.tsx>. Esse uso se dá pela melhora na segurança da aplicação
const handleRequest = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    body,
    method,
    query: { cartId },
  } = req;

  // Se o método acionado pelo hook de carrinho for um POST, então salva um novo carrinho
  if (method === "POST") {
    return api
      .post(`carts`, { ...body })
      .then(({ status, data }) => {
        // Se a requisição na api da fakestoreapi der tudo certo, então retorna a resposta para o hook de carrinho.
        return res.status(status).json(data);
      })
      .catch(({ response }) => {
        // Se algo de errado acontecer na requisição da api da fakestoreapi, então retorna a resposta para o hook de carrinho.
        const { status } = response;
        return res.status(status).json(response?.data);
      });
  }

  // Se o método acionado pelo hook de carrinho for um DELETE, então apaga um carrinho específico
  if (method === "DELETE") {
    return api
      .delete(`carts/${cartId}`)
      .then(({ status, data }) => {
        // Se a requisição na api da fakestoreapi der tudo certo, então retorna a resposta para o hook de carrinho.
        return res.status(status).json(data);
      })
      .catch(({ response }) => {
        // Se algo de errado acontecer na requisição da api da fakestoreapi, então retorna a resposta para o hook de carrinho.
        const { status } = response;
        return res.status(status).json(response?.data);
      });
  }

  // Se o método acionado pelo hook de carrinho for um PUT, então atualiza a quantidade de itens de um carrinho específico
  if (method === "PUT") {
    return api
      .delete(`carts/${body.cartId}`, { ...body })
      .then(({ status, data }) => {
        // Se a requisição na api da fakestoreapi der tudo certo, então retorna a resposta para o hook de carrinho.
        return res.status(status).json(data);
      })
      .catch(({ response }) => {
        // Se algo de errado acontecer na requisição da api da fakestoreapi, então retorna a resposta para o hook de carrinho.
        const { status } = response;
        return res.status(status).json(response?.data);
      });
  }
};

export default handleRequest;
