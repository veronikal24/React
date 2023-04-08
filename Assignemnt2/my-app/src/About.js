import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get('id');

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
      const data = await response.json();
      setPokemonData(data);
    }
    fetchPokemonData();
  }, [id]);

  if (!pokemonData) {
    return <div><h2>Loading...</h2></div>;
  }

  const { name, sprites, height, weight } = pokemonData;

  return (
    <div>
      <h2>About Pokemon {name}</h2>
      <img src={sprites.front_default} alt={`${name} sprite`} />
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Abilities:</p>
   
  
    </div>
  );
}

export default About;
