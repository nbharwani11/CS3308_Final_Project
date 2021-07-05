import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon, showDetails, bag, updateBag }) => {
    const changeHandler = () => {
        updateBag(pokemon.id)
    }

    return (
        <div>
            <img src={ 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png' } alt={ pokemon.name } />
            <div>{ pokemon.name }</div>
            <button onClick={() => changeHandler()}>
                {bag.includes(pokemon.id) ? "Remove from Bag" : "Add to Bag"}
            </button>
            {showDetails && <Link to={`/pokedex/${pokemon.id}`}>Details</Link>}
        </div>
    )
};

export default Card;
