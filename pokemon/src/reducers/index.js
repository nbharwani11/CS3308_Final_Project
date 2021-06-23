import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';

export default combineReducers({
    pokemons: pokemonListReducer,
});