import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ pokemon, showDetails, bag, updateBag }) => {
    const changeHandler = () => {
        updateBag(pokemon.id)
    }

    return (
        <div className="card" style={{width: "300px"}} >
            <img src={ 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.id + '.png' } className="card-img-top" alt={ pokemon.name } />
            <div className="card-body">
                <h5 className="card-title">{ pokemon.name }</h5>
                {showDetails && <Link to={`/pokedex/${pokemon.id}`} className="btn btn-primary">Details</Link>}
                {/* <button className="btn btn-success" onClick={() => changeHandler()}>
                    {bag.includes(pokemon.id) ? "Remove from Bag" : "Add to Bag"}
                </button> */}
                {bag.includes(pokemon.id) ? (
                    <button className="btn btn-warning" onClick={() => changeHandler()}>
                        Remove from Bag
                    </button> ) : (
                    <button className="btn btn-success" onClick={() => changeHandler()}>
                        Add to Bag
                    </button>)
                }
            </div>
        </div>
    )
};

export default Card;
