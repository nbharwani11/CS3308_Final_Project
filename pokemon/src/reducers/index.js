import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducer';
import pokemonReducer from './pokemonReducer';
import bagReducer from './bagReducer';
import bagDetailsReducer from './bagDetailsReducer';



export default combineReducers({
    pokemons: pokemonListReducer,
    pokemon: pokemonReducer,
    bag: bagReducer,
    bagDetails: bagDetailsReducer,
});
