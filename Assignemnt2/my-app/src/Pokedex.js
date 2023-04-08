import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const history = useNavigate();

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=18&offset=${(page - 1) * 18}`
      );
      const data = await response.json();
      const promises = data.results.map((result) =>
        fetch(result.url).then((response) => response.json())
      );
      const pokemonData = await Promise.all(promises);
      setPokemonList(pokemonData);
    }

    fetchPokemonList();
  }, [page]);

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    setPage(page + 1);
  }

  return (
    <div>
      <h2>POKEDEX PAGE, See All the Cool Pokemons you can use</h2>
      <nav>
        <ul className="pokemon-list">
          {pokemonList.map((pokemon) => (
        <div key={pokemon.id} className="pokemon-card">
          <Link to={`/about?name=${pokemon.name}`} state={{ pokemonData: pokemon }}>
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} />
          </Link>
        </div>
      ))}
        </ul>
        <div className="pagination">
          <button onClick={handlePrevPage}>Prev</button>
          <span>{page}</span>
          <button onClick={handleNextPage}>Next</button>
        </div>
      </nav>
    </div>
  );
}

export default Pokedex;
