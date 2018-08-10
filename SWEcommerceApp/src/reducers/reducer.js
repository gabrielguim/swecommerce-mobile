import { combineReducers } from 'redux'
import CartReducer from './CartReducer'
import ProductReducer from './ProductReducer'
import PromotionReducer from './PromotionReducer'

export default reducer = combineReducers({
    CartReducer,
    ProductReducer,
    PromotionReducer
})