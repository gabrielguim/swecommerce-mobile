import * as types from './actionTypes';
import PromotionService from '../services/PromotionService'

export function createPromotion(promotion) {
    return {
        type: types.PROMOTION_CREATE,
        promotion: promotion
    };
}

export function getPromotions() {
    const promotions = PromotionService.getPromotions();

    return {
        type: types.PROMOTION_READ,
        promotions: promotions
    }
}

export function updatePromotion(promotion) {
    return {
        type: types.PROMOTION_UPDATE,
        promotion: promotion
    };
}

export function deletePromotion(promotion) {
    return {
        type: types.PROMOTION_DELETE,
        promotion: promotion
    };
}