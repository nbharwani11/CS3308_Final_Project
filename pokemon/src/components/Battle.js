import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemon, fetchOpponentBag } from '../actions';

class Pokedex extends Component {
    state = {
        // user state
        activePokemonIndex: 1,
        userHealth: [100, 100, 100],

        // opponent state
        activeOpponentPokemonIndex: 0,
        opponentHealth: [100, 100, 100],
    }

    componentDidMount() {
        // TODO: Add logic to generate a specific array of pokemon with hp equivalent base experience
        const opponentBagArray = [25, 37, 87, 104]
        this.props.fetchOpponentBag(opponentBagArray)
    }

    render() {
        const { bag, opponentBag } = this.props;
        const { activePokemonIndex, userHealth, activeOpponentPokemonIndex, opponentHealth } = this.state;
        const pokemon = bag[activePokemonIndex];
        const opponentPokemon = opponentBag[this.state.activeOpponentPokemonIndex];
        
        const userAttack = () => {
            // the code below is just of fancy way of saying userHealth = newUserHealthArray
            let newUserHealthArray = [ ...userHealth ]
            newUserHealthArray[activePokemonIndex] = newUserHealthArray[activePokemonIndex] - 25
            this.setState({ 
                userHealth: newUserHealthArray
            })

            // the code below is just of fancy way of saying opponentHealth = newOpponentHealthArray
            let newOpponentHealthArray = opponentHealth
            newOpponentHealthArray[activeOpponentPokemonIndex] = newOpponentHealthArray[activeOpponentPokemonIndex] - 33
            this.setState({ 
                opponentHealth: newOpponentHealthArray
            })

            console.groupCollapsed()
                console.log("userHealth", userHealth)
                console.log("opponentHealth", opponentHealth)
            console.groupEnd()

            // run for loop on array to check pokemon for userHealth
            //     this.setState({activePokemonIndex: i})

            // end state check here
        }

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
                        Health: { opponentHealth[activeOpponentPokemonIndex] }
                        <img src={ opponentPokemon.sprites.front_default } alt={ opponentPokemon.name } />
                        <div>{ opponentPokemon.name }</div>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        Health: { userHealth[activePokemonIndex] }
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

                <button onClick={() => userAttack()} className="alert alert-danger">Attack</button>
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
