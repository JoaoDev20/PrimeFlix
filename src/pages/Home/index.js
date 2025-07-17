import { useEffect, useState } from "react";
function Home() {
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    async function loadFilme() {}
    loadFilme();
  }, []);

  return (
    <div>
      <h1>Bem vindo a pagina home</h1>
    </div>
  );
}

export default Home;
