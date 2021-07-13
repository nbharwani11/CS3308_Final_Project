import '@testing-library/jest-dom';
import React, {Provider} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, shallow } from '@testing-library/react';
import Home from './components/Home';
import Bag from './components/Bag';
import App from './App';
import PokemonDetails from './components/PokemonDetails';
import PokemonList from './components/PokemonList';

test('renders Home', () => {
    render(<BrowserRouter > <Home /> </BrowserRouter>);
    const linkTitle = screen.getByText(/Others/i);
    expect(linkTitle).toBeInTheDocument();
});

test('renders Bag', () => {
    const bagData = [{name:'bulbasaur', sprites: {front_default:''}}];
    render(<BrowserRouter > <Bag bag = {bagData} /> </BrowserRouter>);
    const linkTitle = screen.getByText(/bulbasaur/i);
    expect(linkTitle).toBeInTheDocument();
});

test('renders PokemonList', () => {
    const pokemonData = [{name:'bulbasaur', sprites: {front_default:''}}, {name:'charizard', sprites: {front_default:''}}];
    const filterString = 'bulb';
    const bagData = [];
    render(<BrowserRouter > <PokemonList pokemons = {pokemonData} bag = {bagData} filter = {filterString} /> </BrowserRouter>);
    const linkTitle = screen.getByText(/bulb/i);
    expect(linkTitle).toBeInTheDocument();
});

