import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './myStyles.css';
function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function getPokemonList() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();
      setPokemonList(data.results);
    }

    getPokemonList();
  }, []);

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
        {pokemonList.map((pokemon) => (
          <div className="pokemon-card" key={pokemon.name}>
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              alt={`${pokemon.name} sprite`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
