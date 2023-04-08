
import React from 'react';
import { Link } from 'react-router-dom';

function Pokedex() {
  return (
    <div>
      <h2>About Pokemon</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Pokedex</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pokedex;
