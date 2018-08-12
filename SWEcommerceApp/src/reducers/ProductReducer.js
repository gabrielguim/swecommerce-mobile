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
            var newProducts = []
            var products =  state.products.length === 0 ? action.products : state.products     
            var promotions = state.promotions.length === 0 ? PromotionService.getPromotions() : state.promotions
            
            products.forEach(product => {
                if (product.hasOwnProperty('promotionId')) {
                    var found = promotions.find((promotion) => {                       
                        if (promotion.id === product.promotionId)
                            return promotion
                    })

                    if (found) {
                        product["promotion"] = found
                    } else {
                        delete product["promotion"]
                        delete product["promotionId"]
                    }
                }
            });
            
            products.forEach(product => {
                newProducts.push(product)
            })
            
            
            return {
                ...state,
                products: newProducts
            };
        case types.PRODUCT_UPDATE:
            var newProducts = []
            state.products.forEach((product) => {
                if (product.id === action.product.id) {
                    newProducts.push(action.product)
                } else {
                    newProducts.push(product)
                }
            });
            
            return {
                ...state,
                products: newProducts
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

        case types.PROMOTION_CREATE:
            return {
                ...state,
                promotions: [...state.promotions, action.promotion]
            };
        case types.PROMOTION_READ:
            return {
                ...state,
                promotions: state.promotions.length == 0 ? action.promotions : state.promotions
            };
        case types.PROMOTION_UPDATE:
            var newPromotions = []
            state.promotions.forEach((promotion) => {
                if (promotion.id === action.promotion.id) {
                    newPromotions.push(action.promotion)
                } else {
                    newPromotions.push(promotion)
                }
            });

            return {
                ...state,
                promotions: newPromotions
            };
        case types.PROMOTION_DELETE:
            var newPromotions = []
            state.promotions.forEach((promotion) => {
                if (promotion.id != action.promotion.id) {
                    newPromotions.push(promotion)
                }
            });

            return {
                ...state,
                promotions: newPromotions
            };

        default:
            return state;
    }
}
