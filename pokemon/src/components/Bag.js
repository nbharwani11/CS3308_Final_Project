import React from 'react';

import Card from './Card'

const Bag = ({ pokemons, bag, updateBag }) => {
    const renderList = () => {
        return pokemons ? (
            pokemons
                .filter(bagPokemons => bag.includes(bagPokemons.id))
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
    }
    
    return (
        <>
            <div>BAG</div>
            <div style={{display: "flex"}}>
                {renderList()}
            </div>
        </>
    )
};

export default Bag;
