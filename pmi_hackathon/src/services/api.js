import axios from "axios";

const api = axios.create({
  baseURL: "https://ongrecebe.mybluemix.net/"
});

export default api;
