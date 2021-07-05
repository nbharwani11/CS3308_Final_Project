import React from 'react';

import Card from './Card'

const PokemonList = (props) => {
    const { pokemons, filter, bag, updateBag } = props;
    console.log(props.pokemons)
    console.log(pokemons)
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
