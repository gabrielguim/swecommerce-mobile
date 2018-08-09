import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case types.PRODUCT_CREATE:
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case types.PRODUCT_READ:                    
            return {
                ...state,
                products: state.products.length == 0 ? action.products : state.products
            };
        case types.PRODUCT_UPDATE:
            return {
                ...state,
                products: state.products.set(action.product)
            };
        case types.PRODUCT_DELETE:
            return state.products;
        default:
            return state;
    }
}
