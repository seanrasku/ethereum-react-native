import axios from "axios";
import { API_URL } from "@env";

export const register = async (user) => {
  return await axios.post(`${API_URL}/register`, user);
};
