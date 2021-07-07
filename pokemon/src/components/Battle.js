import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemon, fetchOpponentBag } from '../actions';

class Pokedex extends Component {
    state = {
        activePokemonIndex: 0,
        activeOpponentPokemonIndex: 1,
    }

    componentDidMount() {
        const opponentBagArray = [25, 37, 87, 104]
        this.props.fetchOpponentBag(opponentBagArray)
    }

    render() {
        const { bag, opponentBag } = this.props;
        const pokemon = bag[this.state.activePokemonIndex];
        const opponentPokemon = opponentBag[this.state.activeOpponentPokemonIndex];

        return pokemon && opponentPokemon ? (
            <>
                <Link to={`/pokedex`}>BACK</Link>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", flexDirection: "vertical"}}>
                        {opponentPokemon.moves[0].move.name}<br/>
                        {opponentPokemon.moves[1].move.name}<br/>
                        {opponentPokemon.moves[2].move.name}<br/>
                        {opponentPokemon.moves[3].move.name}<br/>
                    </div>
                    <div>
                        <img src={ opponentPokemon.sprites.front_default } alt={ opponentPokemon.name } />
                        <div>{ opponentPokemon.name }</div>
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
        opponentBag: state.opponentBag,
    };
};

export default connect(
    mapStateToProps, 
    { fetchPokemon, fetchOpponentBag }
)(Pokedex);
