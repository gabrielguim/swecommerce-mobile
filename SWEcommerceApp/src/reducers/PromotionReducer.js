import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function PromotionReducer(state = initialState, action) {
    switch (action.type) {
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
