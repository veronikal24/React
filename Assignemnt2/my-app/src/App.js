import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';

import Pokedex from './Pokedex';
import About from './About';

function App() {
  return (
    <div>
    <Route path="/" element={<Pokedex />} />
    <Route path="/about/:id" element={<About />} />
  </div>
  );
}

export default App;
