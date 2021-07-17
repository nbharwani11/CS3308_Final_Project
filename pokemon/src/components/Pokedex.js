import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemons, updateBag } from '../actions';

import PokemonList from './PokemonList';
import Bag from './Bag';
import SearchBar from './SearchBar';

import Sound from 'react-sound';
import palettetown from '../utils/audio/palettetown_pokedex.mp3';

class Pokedex extends Component {
    state = {
        nameFilter: '', 
        typeFilter: ''
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
        const pokemonType = ['Fire', 'Water', 'Psychic']
        console.log("pokemons", pokemons)
        console.log("bag", bag)
        console.log("move", pokemons.name)
        return (
            <div className="container">
                <Link to={"../"}>HOME</Link>
                <Link to={"/battle"}>BATTLE</Link>
                <Bag
                    bag={bag}
                    updateBag={updateBag}
                />
                <SearchBar 
                    setFilterPokemon={this.filterPokemon}
                />
                        
                <select name="types" value={this.state.typeFilter} onChange={(event) => this.setState({ typeFilter:event.target.value })}>
                    <option value="">sort pokemon by primary type</option>
                    {pokemonType.map(type => <option value={type.toLowerCase()}>{type}</option>)}
                </select>  

                <input type="range" id="points" name="points" min="1" max="10" />

                <PokemonList
                    pokemons={pokemons}
                    nameFilter={this.state.nameFilter}
                    typeFilter={this.state.typeFilter}
                    bag={bag}
                    updateBag={updateBag}
                />
            <Sound 
                url={palettetown}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                loop={true}
            />            
            </div>
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
