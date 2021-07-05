import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemon, updateBag } from '../actions';

import Card from './Card';

class PokemonDetails extends Component {
    componentDidMount() {
        this.props.fetchPokemon(this.props.match.params.id)
    }

    componentDidUpdate() {
        this.props.fetchPokemon(this.props.match.params.id)
    }

    render() {
        const { pokemon, bag, updateBag } = this.props;
        const pokemonId = this.props.match.params.id;
        console.log(pokemon)

        return this.props.pokemon.name ? (
            <div>
                <Link to={`/pokedex`}>BACK</Link>
                {pokemonId > 1 && <Link to={`/pokedex/${pokemonId - 1}`}>PREVIOUS</Link>}
                <div>
                    <Card
                        pokemon={pokemon}
                        bag={bag}
                        updateBag={updateBag}
                    />                        
                    <p><h5>Height:</h5> {pokemon.height}</p>
                    <p><h5>Weight:</h5> {pokemon.weight}</p>
                    <p><h5>Type:</h5> Fire, Flying</p>
                </div>
                {pokemonId < 151 && <Link to={`/pokedex/${parseInt(pokemonId) + 1}`}>NEXT</Link>}
            </div>
        ) : null
    }
}

const mapStateToProps = (state) => {
    return { 
        pokemon: state.pokemon,
        bag: state.bag,
    };
};

export default connect(
    mapStateToProps,
    { fetchPokemon, updateBag }
)(PokemonDetails);