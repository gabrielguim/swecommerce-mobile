import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case types.CART_ADD_TO:
            return {
                ...state,
                cart: [...state.cart, action.product]
            };
        case types.CART_CLEAR:
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
}
