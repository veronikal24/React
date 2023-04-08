import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pokedex from './Pokedex';
import About from './About';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/about/:name" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
