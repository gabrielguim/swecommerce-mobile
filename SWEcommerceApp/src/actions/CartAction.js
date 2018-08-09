import * as types from './actionTypes';

export function addToCart(product) {
    return {
        type: types.CART_ADD_TO,
        product: product
    };
}

export function getCart() {
    return {
        type: types.CART_READ
    }
}

export function clearCart() {
    return {
        type: types.CART_CLEAR
    }
}