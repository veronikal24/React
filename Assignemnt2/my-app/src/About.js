import React from 'react';
import { useLocation } from 'react-router-dom';

function About() {
  const { state: { pokemonData } } = useLocation();

  return (
    <div>
      <h2>About {pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={`${pokemonData.name} sprite`} />
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
    </div>
  );
}

export default About;