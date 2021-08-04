import React from 'react';
import { Link } from 'react-router-dom';

import "./PokemonDetails.css"
import "./Pokedex.css"

const Card = ({ pokemon, showDetails, bag, isBag, updateBag }) => {
    const changeHandler = () => {
        updateBag(pokemon)
    }

    return (
<<<<<<< HEAD
        <div className="card">
            <div className={isBag ? "col-sm-12 col-md-2" : null} style={{width: "20%"}}>
                <div className="card text-center">
                    <div className="card -header">{ pokemon.name }</div>
                    <div className="card -content">
                        <img src={ pokemon.sprites.front_default } className="card-img-top" alt={ pokemon.name } />
                    </div>
                    <div className="card -footer">
                        {showDetails && <Link to={`/pokedex/${pokemon.id}`} className="btn btn-primary">Details</Link>}
                        {bag.includes(pokemon) ? (
                            <button className="btn btn-warning" onClick={() => changeHandler()}>
                                Remove
                            </button> ) : (
                            <button className="btn btn-success" onClick={() => changeHandler()}>
                                Add
                            </button>)
                        }    
                    </div>
                </div>
=======
        <div className="card text-center">
            <div className="card -header">{ pokemon.name }</div>
            <div className="card -content">
                <img src={ pokemon.sprites.front_default } className="card-img-top" alt={ pokemon.name.toUpperCase() } />
            </div>
            <div className="card -footer">
                {showDetails && <Link to={`/pokedex/${pokemon.id}`} className="btn btn-primary">Details</Link>}
                {bag.includes(pokemon) ? (
                    <button className="btn btn-warning" onClick={() => changeHandler()}>
                        Remove
                    </button> ) : (
                    <button className="btn btn-success" onClick={() => changeHandler()}>
                        Add
                    </button>)
                }    
>>>>>>> 7cf75ebbec5c936a23719a3b8a4bceecb1ae9f69
            </div>
        </div>
    )
};

export default Card;
