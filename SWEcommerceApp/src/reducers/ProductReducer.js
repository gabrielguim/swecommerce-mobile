import * as types from '../actions/actionTypes';
import initialState from './initialState';
import PromotionService from '../services/PromotionService'

export default function ProductReducer(state = initialState, action) {
    switch (action.type) {
        case types.PRODUCT_CREATE:
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case types.PRODUCT_READ:   
            var products =  state.products.length == 0 ? action.products : state.products     
            var promotions = PromotionService.getPromotions()
            
            products.forEach(product => {
                if (product.hasOwnProperty('promotionId')) {
                    product["promotion"] = promotions.find((promotion) => {
                        if (promotion.id === product.promotionId)
                            return promotion
                    })
                }
            });           
            
            return {
                ...state,
                products: products
            };
        case types.PRODUCT_UPDATE:
            return {
                ...state,
                products: state.products.set(action.product)
            };
        case types.PRODUCT_DELETE:
            var newProducts = []
            state.products.forEach((product) => {
                if (product.id != action.product.id) {
                    newProducts.push(product)
                }
            });
            
            return {
                ...state,
                products: newProducts
            };
        default:
            return state;
    }
}
