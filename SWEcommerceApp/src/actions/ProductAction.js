import * as types from './actionTypes';
import ProductService from '../services/ProductService'

export function createProduct(product) {
    return {
        type: types.PRODUCT_CREATE,
        product: product
    };
}

export function getProducts() {
    const products = ProductService.getProducts();

    return {
        type: types.PRODUCT_READ,
        products: products
    }
}

export function updateProduct(product) {    
    return {
        type: types.PRODUCT_UPDATE,
        product: product
    };
}

export function deleteProduct(product) {
    return {
        type: types.PRODUCT_DELETE,
        product: product
    };
}