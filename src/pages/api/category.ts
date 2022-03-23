// Importação das bibliotecas do react
import type { NextApiRequest, NextApiResponse } from "next";

// Importação da instância do AXIO, chamada api
import api from "../../services/api";

type Data = {
  name: string;
};

// Essas é a rota verdadeiras da fakestoreapi, as chamadas são feitas no componente de navigation <src\containers\Navigation\index.tsx>
const handleRequest = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    query: { categoryName },
  } = req;

  return api
    .get(`products/category/${categoryName}`)
    .then(({ status, data }) => {
      return res.status(status).json(data);
    })
    .catch(({ response }) => {
      const { status } = response;
      return res.status(status).json(response?.data);
    });
};

export default handleRequest;
