import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const responses = await Promise.all([
        getPokemon("bulbasaur"),
        getPokemon("ivysaur"),
        getPokemon("venusaur"),
        getPokemon("charmander"),
        getPokemon("charmeleon"),
        getPokemon("charizard"),
        getPokemon("squirtle"),
        getPokemon("wartortle"),
        getPokemon("blastoise"),
        getPokemon("caterpie"),
        getPokemon("metapod"),
        getPokemon("butterfree"),
        getPokemon("pidgeotto"),
      ]);

      const data = await Promise.all(responses.map((res) => res.json()));
      const pokemonData = data.map((pokemon) => ({
        name: pokemon.name,
        weight: pokemon.weight / 10,
        image: pokemon.sprites.front_default,
      }));
      setPokemonList(pokemonData);
    }

    fetchPokemon();
  }, []);

  function getPokemon(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  return (
    <div className="pokedex">
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
      <div className="pokedex-list">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.name} className="pokemon">
            <h3>{pokemon.name}</h3>
            <p>Weight: {pokemon.weight}</p>
            <img src={pokemon.image} alt={`${pokemon.name} sprite`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pokedex;

