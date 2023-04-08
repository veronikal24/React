import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Pokedex from './Pokedex';
import About from './About';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/React"> 

    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/about/:id" element={<About />} />
    </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
