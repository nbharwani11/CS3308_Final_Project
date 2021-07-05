import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case actionTypes.FETCH_BAG_DETAILS:
            return action.payload;
        default:
            return state;
    }
}