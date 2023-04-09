import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./index.css";

function About() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPokemonData() {
      console.log("this is the id");
      console.log(id);
      if (!id) return; // add this check to ensure id is not null
      console.log(id);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}?fields=name,height,weight,abilities,sprites`
      );
      const data = await response.json();
      setPokemonData(data);
    }
    fetchPokemonData();
  }, [id]);

  if (!pokemonData) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const { name, sprites, height, weight, abilities } = pokemonData;

  return (
    <div>
      <div className="pokemon-card-about">
        <h2>About Pokemon {name}</h2>
        {sprites ? (
          <img
            className="pokemon-image "
            src={sprites.front_default}
            alt={`${name} sprite`}
          />
        ) : (
          <p>No sprite available</p>
        )}
        <div class="container">
          <ul class="general">
            <li> Height: {height} cm </li>
            <li> Weight: {weight} kg </li>
            <li>
              {" "}
              <b>Abilities:</b>{" "}
            </li>
          </ul>
        </div>
        <div class="container">
          <ul class="abilities">
            {abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <button class="next-button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
}

export default About;
