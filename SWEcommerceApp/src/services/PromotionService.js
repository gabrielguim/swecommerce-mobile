import mock from './mock'

const calculateAmountPromotion = (promotion, price, amount) => {
    if (promotion.condition === 0) {
        return amount * promotion.value;
    }

    var discount = parseInt(amount / promotion.condition);
    var remainder = amount % promotion.condition;

    return discount * promotion.value + remainder * price;
}

const calculatePercentagePromotion = (promotion, price, amount) => {
    if (promotion.condition == 0)
        return (amount * price) * (1 - parseInt((promotion.value / 100)));

    var remainder = amount % promotion.condition;
    var discount = amount - remainder;

    return ((promotion.value / 100)) * (price * discount) + remainder * price;
}

class PromotionService {
    static getPromotions() {
        return mock.promotions
    }

    static calculatePromotion(promotion, price, amount) {        
        if (promotion.id != '-1') {
            if (promotion.type === 'AMOUNT')
                return calculateAmountPromotion(promotion, price, amount)
            else (promotion.type === 'PERCENTAGE')
            return calculatePercentagePromotion(promotion, price, amount)
        } else {
            return parseFloat(price) * parseFloat(amount)
        }        
    }
}

export default PromotionService;