import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apikey: process.env.OMDB_KEY
  }
})

axios.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['apikey'] = process.env.OMDB_KEY;
  return config;
});

export default axios;