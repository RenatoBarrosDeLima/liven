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
