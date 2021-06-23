import React from 'react';

const Card = ({ pokemon }) => {
    return (
        <div>
            <img src={ 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png' } alt={ pokemon.name } />
            <div>{ pokemon.name }</div>
        </div>
    )
};

export default Card;
