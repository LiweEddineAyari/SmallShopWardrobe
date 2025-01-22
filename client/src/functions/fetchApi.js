import axios from "axios";
import { apiToken, apiUrl } from "../vite.config";

export const fetchApi = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: "Bearer " + apiToken,
  },
});
