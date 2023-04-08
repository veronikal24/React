import React, { useState, useEffect } from 'react';
import './index.css'; // import the CSS file
import { Link, useNavigate} from 'react-router-dom';




function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const history = useNavigate();
  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const promises = data.results.map((result) => fetch(result.url).then((res) => res.json()));
      const pokemonDataList = await Promise.all(promises);
      setPokemonList(pokemonDataList);
    }

    fetchPokemonList();
  }, []);


  const handleCardClick = (pokemon) => {
    history.push(`/about/${pokemon.name}`, { pokemonData: pokemon });
  };

   // Determining how many pokemons per page we need to see
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemonList = pokemonList.slice(startIndex, endIndex);
   // Determining 
  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemon = pokemonList.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const renderPokemon = () => {
    return currentPokemon.map((pokemon) => (
      <div key={pokemon.id} className="pokemon-card" onClick={() => handleCardClick(pokemon)}>
        <h3>{pokemon.name}</h3>
        <img src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} />
      </div>
    ));
  };
  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokemonList.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <li key={number}>
        <button onClick={() => setCurrentPage(number)}>{number}</button>
      </li>
    ));
  };
  return (
    <div>
      <h2>POKEDEX PAGE, See All the Cool Pokemons you can use</h2>
      <div className="pokemon-container">{renderPokemon()}</div>
      <ul className="pagination">{renderPagination()}</ul>
    </div>
  );
}

export default Pokedex;





