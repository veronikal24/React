import React, { useState, useEffect } from 'react';
import './index.css'; // import the CSS file
import { Link, useHistory} from 'react-router-dom';



function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const history = useHistory();
  useEffect(() => {
    async function fetchPokemonList() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      setPokemonList(data.results);
    }

    fetchPokemonList();
  }, []);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function handlePrevPageClick() {
    setCurrentPage(currentPage - 1);
  }


  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const currentPokemonList = pokemonList.slice(startIndex, endIndex);

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
        {currentPokemonList.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-item">
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${startIndex + pokemonList.indexOf(pokemon) + 1}.png`}
              alt={`${pokemon.name} sprite`}
              className="pokemon-image"
            />
          </div>
        ))}
      </div>
   
      <div className="pagination">
        <button onClick={handlePrevPageClick} disabled={currentPage === 1}>Prev</button>
        <button onClick={handleNextPage} disabled={endIndex >= pokemonList.length}>Next</button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">
              Click on a specific picture to go to About page
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>

  );
}

export default Pokedex;





