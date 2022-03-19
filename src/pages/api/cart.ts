import api from "../../services/api";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handleRequest = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    body,
    method,
    query: { cartId },
  } = req;

  if (method === "POST") {
    return api
      .post(`carts`, { ...body })
      .then(({ status, data }) => {
        return res.status(status).json(data);
      })
      .catch(({ response }) => {
        const { status } = response;
        return res.status(status).json(response?.data);
      });
  }

  if (method === "DELETE") {
    return api
      .delete(`carts/${cartId}`)
      .then(({ status, data }) => {
        return res.status(status).json(data);
      })
      .catch(({ response }) => {
        const { status } = response;
        return res.status(status).json(response?.data);
      });
  }

  if (method === "PUT") {
    return api
      .delete(`carts/${body.cartId}`, { ...body })
      .then(({ status, data }) => {
        return res.status(status).json(data);
      })
      .catch(({ response }) => {
        const { status } = response;
        return res.status(status).json(response?.data);
      });
  }
};

export default handleRequest;
