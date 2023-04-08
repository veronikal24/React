import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>POKEDEX PAGE, See All the Cool Pokemons you can use</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about">Click on a specific picture to go to About page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
