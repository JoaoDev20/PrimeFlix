import axios from "axios";

// URL DA API: https://api.themoviedb.org/3/movie/now_playing?api_key=08d24a4f07205da0b7e6f73617abccf9&language=pt-BR

// URL BASE: https://api.themoviedb.org/3/

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
