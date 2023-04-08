import React, { useState, useEffect } from 'react';
import './index.css'; // import the CSS file
import { Link } from 'react-router-dom';



function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      setPokemonList(data.results);
    }

    fetchPokemonList();
  }, []);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const currentPokemonList = pokemonList.slice(startIndex, endIndex);

  return (
    <div>
      <h2>POKEDEX PAGE, See All the Cool Pokemons you can use</h2>
      
      <nav>
        <ul>
          <li>
            <Link to="/about">
              Click on a specific picture to go to About page
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pokemon-list">
        {currentPokemonList.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-item">
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${startIndex + pokemonList.indexOf(pokemon) + 1}.png`}
              alt={`${pokemon.name} sprite`}
              className="pokemon-image"
            />
          </div>
        ))}
      </div>
      <div className="next-button">
        {currentPage < Math.ceil(pokemonList.length / 6) && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Pokedex;





