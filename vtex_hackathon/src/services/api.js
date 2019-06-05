import axios from "axios";

const api = axios.create({
  baseURL: "http://vtex-api-dev.us-west-2.elasticbeanstalk.com/"
});

export default api;
