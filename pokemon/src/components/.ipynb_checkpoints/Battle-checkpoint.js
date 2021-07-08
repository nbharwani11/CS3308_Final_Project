import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemon, fetchBagDetails } from '../actions';

class Pokedex extends Component {
    state = {
        activePokemonIndex: 0,
    }

    componentDidMount() {
        this.props.fetchBagDetails(this.props.bag)
    }

    render() {
        const { bagDetails } = this.props;
        const pokemon = bagDetails[this.state.activePokemonIndex];
        console.log(pokemon)

        return pokemon ? (
            <>
                <Link to={`/pokedex`}>BACK</Link>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", flexDirection: "vertical"}}>
                        {pokemon.moves[0].move.name}<br/>
                        {pokemon.moves[1].move.name}<br/>
                        {pokemon.moves[2].move.name}<br/>
                        {pokemon.moves[3].move.name}<br/>
                    </div>
                    <div>
                        <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
                        <div>{ pokemon.name }</div>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <img src={ pokemon.sprites.back_default } />
                        <div>{ pokemon.name }</div>
                    </div>
                    <div style={{display: "flex", flexDirection: "vertical"}}>
                        {pokemon.moves[0].move.name}<br/>
                        {pokemon.moves[1].move.name}<br/>
                        {pokemon.moves[2].move.name}<br/>
                        {pokemon.moves[3].move.name}<br/>
                    </div>
                </div>
            </>
        ) : null;
    }
}

const mapStateToProps = (state) => {
    return { 
        pokemons: state.pokemons,
        bag: state.bag,
        bagDetails: state.bagDetails,
    };
};

export default connect(
    mapStateToProps, 
    { fetchPokemon, fetchBagDetails }
)(Pokedex);
