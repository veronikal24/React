import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function About() {
  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}?fields=name,height,weight,abilities,sprites`);
      const data = await response.json();
      setPokemonData(data);
    }
    fetchPokemonData();
  }, [id]);

  if (!pokemonData) {
    return <div><h2>Loading...</h2></div>;
  }

  const { name, sprites, height, weight, abilities } = pokemonData;

  return (
    <div>
      <h2>About Pokemon {name}</h2>
      {sprites ? (
        <img src={sprites.front_default} alt={`${name} sprite`} />
      ) : (
        <p>No sprite available</p>
      )}
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Abilities:</p>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
