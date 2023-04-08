import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Pokedex from './Pokedex';
import About from './About';
import NotFound from './NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/React"> 
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
