import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchPokemonData() {
      const pokemonData = await Promise.all([
        fetchPokemonDataByName("bulbasaur"),
        fetchPokemonDataByName("ivysaur"),
        fetchPokemonDataByName("venusaur"),
        fetchPokemonDataByName("charmander"),
        fetchPokemonDataByName("charmeleon"),
        fetchPokemonDataByName("charizard"),
        fetchPokemonDataByName("squirtle"),
        fetchPokemonDataByName("wartortle"),
        fetchPokemonDataByName("blastoise"),
        fetchPokemonDataByName("caterpie"),
        fetchPokemonDataByName("metapod"),
        fetchPokemonDataByName("butterfree"),
        fetchPokemonDataByName("pidgeotto"),
      ]);

      setPokemonList(pokemonData);
    }

    fetchPokemonData();
  }, []);

  async function fetchPokemonDataByName(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();

    return {
      name: data.name,
      weight: data.weight,
      image: data.sprites.front_default,
    };
  }

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
        {pokemonList.map((pokemon) => (
  <div key={pokemon.name} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
    <h3 style={{ color: 'blue', fontSize: '20px' }}>{pokemon.name}</h3>
    <p>Weight: {pokemon.weight}</p>
    <img style={{ maxWidth: '200px' }} src={pokemon.image} alt={`${pokemon.name} sprite`} />
  </div>
))}

      </nav>
    </div>
  );
}

export default Pokedex;
