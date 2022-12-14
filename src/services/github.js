import Axios from "axios";

export const GitHub = Axios.create({
  baseURL: "https://api.github.com",
});