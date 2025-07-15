import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Bem vindo a pagina home</h1>
      <Link to="/filme/:id">Filmes em alta</Link>
    </div>
  );
}

export default Home;
