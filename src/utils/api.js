import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";
import Auth from "./Auth";

// console.log({ REACT_APP_BASE_URL });
const Api = axios.create({
  baseURL: REACT_APP_BASE_URL,
});

Api.interceptors.request.use(
  async (config) => {
    const token = await Auth.getToken();
    if (token) {
      config.headers.common.Authorization = `Bearer ${JSON.parse(token)}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default Api;
