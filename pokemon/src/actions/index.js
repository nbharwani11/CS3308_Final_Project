import * as actionTypes from './actionTypes';
import pokeapi from '../apis/pokeapi';

export const fetchPokemons = () => async dispatch => {
    const response = await pokeapi.get('?limit=151');

    response.data.results.map((pokemon, i) =>  {
        pokemon.id = parseInt(i+1)
    })
    
    dispatch({
        type: actionTypes.FETCH_POKEMONS,
        payload: response.data.results
    })
};
