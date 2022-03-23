// Importação da bibliotecas do Axios
import axios from "axios";

// Cria uma instância no axios que será utilizado por toda a aplicação usando a URL da fakestoreapi
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default api;
