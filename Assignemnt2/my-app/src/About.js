import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "./index.css";

function About() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const { id } = useParams();

  const [pokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchPokemonData() {
      console.log("this is the id")
      console.log(id)
      if (!id) return; // add this check to ensure id is not null
      console.log(id)
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
    <div className="pokemon-card">
    
      <h2>About Pokemon {name}</h2>
      <div className="pokemon-card">
      {sprites ? (
        <img className="pokemon-image " src={sprites.front_default} alt={`${name} sprite`} />
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
      <button class = "next-button" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default About;
