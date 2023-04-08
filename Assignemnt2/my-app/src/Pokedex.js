import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [totalWeight, setTotalWeight] = useState(null);

  useEffect(() => {
    async function printTotalWeight() {
      const responses = await Promise.all([
        getPokemon("pikachu"),
        getPokemon("bulbasaur"),
        getPokemon("charmander"),
        getPokemon("squirtle"),
        getPokemon("butterfree"),
        getPokemon("pidgeotto"),
      ]);
      const promises = responses.map((response) => response.json());
      const pokemonList = await Promise.all(promises);
      const weightSum = pokemonList.reduce(
        (weightSum, { weight }) => weightSum + weight,
        0
      );
      const avgWeight = (weightSum / 10).toFixed(1);
      setTotalWeight(avgWeight);
    }

    printTotalWeight();
  }, []);

  function getPokemon(name) {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + name);
  }

  return (
    <div>
      <h2>POKEDEX PAGE, See All the Cool Pokemons you can use</h2>
      <h2>Total weight of the pokemons: {totalWeight}</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about">
              Click on a specific picture to go to About page
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;

