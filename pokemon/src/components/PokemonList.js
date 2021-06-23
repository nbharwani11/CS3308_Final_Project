import React from 'react';

import Card from './Card'

const PokemonList = ({ pokemons }) => {
    return pokemons ? (
        pokemons
            .map(pokemon => {
                return (
                    <Card key={pokemon.name} pokemon={ pokemon } />
                );
            })) : "LOADING..."
};

export default PokemonList;
