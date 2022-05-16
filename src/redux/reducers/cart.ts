import {
  ADD_COUNTRIES_CART,
  REMOVE_COUNTRIES_CART,
  CountryAllActions,
  CartState,
} from '../../types'

const initialState: CartState = {
  cartData: [],
}

export function cartReducer(state = initialState, action: CountryAllActions) {
  // console.log('initialState:', initialState)
  // console.log('action:', action)
  switch (action.type) {
    case ADD_COUNTRIES_CART: {
      // console.log('ADD_COUNTRIES_CART from ACTION')
      // console.log('ACTION:', action)
      const {
        payload: { country },
      } = action
      return {
        ...state,
        cartData: state.cartData.concat(country),
      }
    }
    case REMOVE_COUNTRIES_CART: {
      // console.log('REMOVE_COUNTRIES_CART from ACTION')
      // console.log('ACTION:', action)
      const {
        payload: { country },
      } = action
      return {
        ...state,
        cartData: state.cartData.filter((item) => item !== country),
      }
    }

    default:
      return state
  }
}
