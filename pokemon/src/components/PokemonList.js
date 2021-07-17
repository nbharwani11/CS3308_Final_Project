import React from 'react';

import Card from './Card'

const PokemonList = (props) => {
    const { pokemons, nameFilter, bag, updateBag, typeFilter } = props;
    
    return pokemons ? (
        pokemons
            .filter(nameFilterPokemon => nameFilterPokemon.name.includes(nameFilter.toLowerCase()))
            .filter(typeFilterPokemon => typeFilterPokemon.types[0].type.name.includes(typeFilter))
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
