import { combineReducers } from 'redux'
import { countryReducer } from './country'
import { cartReducer } from './cart'

export const rootReducer = combineReducers({
  country: countryReducer,
  carts: cartReducer,
})
