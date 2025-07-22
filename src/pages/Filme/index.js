import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./filme-info.css";

import api from "../../services/api";
function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "08d24a4f07205da0b7e6f73617abccf9",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Erro filme não encontrado");
        });
    }

    loadFilme();

    return () => {
      console.log("COMPONETE DESMONTADO");
    };
  }, []);

  if (loading) {
    return (
      <div className="filme-info">
        <h2>Carregando detalhes....</h2>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />

      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>Avaliação: {filme.vote_average.toFixed(1)} /10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href="#">Trailer</a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
