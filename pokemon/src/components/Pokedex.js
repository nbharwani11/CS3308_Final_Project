import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemons, updateBag } from '../actions';

import PokemonList from './PokemonList';
import Bag from './Bag';
import SearchBar from './SearchBar';

class Pokedex extends Component {
    state = {
        filter: ''
    }

    componentDidMount() {
        if(this.props.pokemons.length === 0) {
            this.props.fetchPokemons();
        }
    }

    filterPokemon = (filterString) => {
        this.setState({ filter: filterString });
    }

    render() {
        const { pokemons, bag, updateBag } = this.props;

        return (
            <>
                <Link to={"/battle"}>BATTLE</Link>
                <Bag
                    pokemons={pokemons}
                    bag={bag}
                    updateBag={updateBag}
                />
                <SearchBar 
                    filterPokemon={this.filterPokemon}
                />
                <PokemonList
                    pokemons={pokemons}
                    filter={this.state.filter}
                    bag={bag}
                    updateBag={updateBag}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        pokemons: state.pokemons,
        bag: state.bag,
    };
};

export default connect(
    mapStateToProps, 
    { fetchPokemons, updateBag }
)(Pokedex);
