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

export const fetchPokemon = (id) => async dispatch => {
    const response = await pokeapi.get('/' + id);

    dispatch({
        type: actionTypes.FETCH_POKEMON,
        payload: response.data
    })
};

export const updateBag = (id) => async dispatch => {
    dispatch({
        type: actionTypes.UPDATE_BAG,
        payload: id
    })
};

export const fetchBagDetails = (bag) => async dispatch => {
    const pokemenDetailsArray = [...bag]

    const promises = pokemenDetailsArray.map((id) => {
        return pokeapi.get('/' + id)
    })
 
    const responses = await Promise.all(promises)

    dispatch({
        type: actionTypes.FETCH_BAG_DETAILS,
        payload: responses.map((response) => response.data)
    })
};
