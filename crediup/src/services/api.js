import axios from 'axios';

const api = axios.create({
  baseURL: 'https://crediup.azurewebsites.net/api/',
});

export default api;
