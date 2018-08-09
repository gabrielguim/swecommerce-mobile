import * as types from '../actions/actionTypes';
import initialState from './initialState';
import PromotionService from '../services/PromotionService'

export default function CartReducer(state = initialState, action) {
    switch (action.type) {
        case types.CART_ADD_TO:
            var groupedCart = state.groupedCart            
            var promotion = action.product.hasOwnProperty('promotion') ? action.product.promotion : { id: -1, condition: 0 }
            var product = action.product

            var promoId = promotion.id
            var id = 'prod-' + product.id
            if (groupedCart.hasOwnProperty(id)) {                                
                if (groupedCart[id].amount + 1 === promotion.condition) {
                    var oldId = id
                    var newId = oldId + '-promo-' + promoId
                    var prevAmount = groupedCart.hasOwnProperty(newId) ? groupedCart[newId].amount + 1 : 1
                    
                    groupedCart[newId] = {
                        amount: groupedCart[oldId].amount + prevAmount,
                        product: product,
                        totalPrice: PromotionService.calculatePromotion(promotion, product.price, groupedCart[oldId].amount + prevAmount)
                    }

                    delete groupedCart[oldId]                    
                } else {
                    var group = groupedCart[id]
                    group.amount = group.amount + 1
                    group.totalPrice = PromotionService.calculatePromotion(promotion, product.price, group.amount)
                }
            } else {
                groupedCart[id] = {
                    amount: 1,
                    product: product,
                    totalPrice: PromotionService.calculatePromotion(promotion, product.price, 1)
                }
            }

            return {
                ...state,
                cart: [...state.cart, action.product],
                groupedCart: groupedCart
            };
        case types.CART_READ:
            return {
                ...state,
                cart: state.cart,
                groupedCart: state.groupedCart
            };
        case types.CART_CLEAR:
            return {
                ...state,
                cart: [],
                groupedCart: []
            };
        default:
            return state;
    }
}
