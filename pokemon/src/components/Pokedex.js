import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPokemons, updateBag } from '../actions';

import PokemonList from './PokemonList';
import Bag from './Bag';
import SearchBar from './SearchBar';

import Sound from 'react-sound';
import palettetown from '../utils/audio/palettetown_pokedex.mp3';

//import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

class Pokedex extends Component {
    state = {
        nameFilter: '', 
        typeFilter: '',
        maxBaseExperienceFilter: '300'
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
        const pokemonType = ['Grass', 'Fire', 'Water', 'Psychic', 'Normal', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Fairy']
        console.log("pokemons", pokemons)
        console.log("bag", bag)
        console.log("move", pokemons.name)
        return (
            <div class="p-3 mb-2 bg-light text-dark">
            <div className="container">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-primary"><Link to={"../"}>HOME</Link></button>
                    <button type="button" class="btn btn-outline-primary"><Link to={"/battle"}>BATTLE</Link></button>
                </div>
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
                
                <label for = "points">
                    Base Value
                </label>  
                <input
                    type="range" 
                    id="points" 
                    name="points" 
                    min="1" 
                    max="300" 
                    value = {this.state.maxBaseExperienceFilter} 
                    onChange={(event) =>  this.setState({maxBaseExperienceFilter:event.target.value })}
                />
                        
                <PokemonList 
                    pokemons={pokemons}
                    nameFilter={this.state.nameFilter}
                    typeFilter={this.state.typeFilter}
                    maxBaseExperienceFilter={this.state.maxBaseExperienceFilter}
                    bag={bag}
                    updateBag={updateBag}
                />
            </div>
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
