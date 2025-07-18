import { useEffect, useState } from "react";
import api from "../../services/api";
function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "08d24a4f07205da0b7e6f73617abccf9",
          language: "pt-BR",
          page: 1,
        },
      });

      console.log(response.data.results);
    }
    loadFilmes();
  }, []);

  return (
    <div>
      <h1>Bem vindo a pagina home</h1>
    </div>
  );
}

export default Home;
