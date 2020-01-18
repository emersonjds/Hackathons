import axios from 'axios';

const api = axios.create({
  baseURL: 'http://hacka-vtex-webapi-dev.us-east-1.elasticbeanstalk.com/',
});

export default api;
