import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';

import PokemonList from './PokemonList';

class Pokedex extends Component {
    componentDidMount() {
        if(this.props.pokemons.length === 0) {
            this.props.fetchPokemons();
        }
    }

    render() {
        const { pokemons } = this.props

        return (
            <PokemonList pokemons={pokemons} />
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        pokemons: state.pokemons,
    };
};

export default connect(
    mapStateToProps, 
    { fetchPokemons }
)(Pokedex);
