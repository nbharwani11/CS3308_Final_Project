import React from 'react';

import Card from './Card'

const PokemonList = (props) => {
    const { pokemons, filter, bag, updateBag } = props;
    
    return pokemons ? (
        pokemons
            .filter(filteredPokemon => filteredPokemon.name.includes(filter.toLowerCase()))
            .map(pokemon => {
                return (
                    <Card
                        showDetails
                        key={pokemon.name}
                        pokemon={ pokemon }
                        bag={bag}
                        updateBag={updateBag}
                    />
                );
            })) : "LOADING..."
};

export default PokemonList;