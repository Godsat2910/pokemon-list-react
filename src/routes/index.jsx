import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import PokemonList from '../pages/PokemonList';
// import { Container } from './styles';

function Router() {
  return <Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='/pokemon-list' element={<PokemonList/>}/>
  </Routes>
}

export default Router;