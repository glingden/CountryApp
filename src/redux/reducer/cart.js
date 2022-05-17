import { ADD_COUNTRIES_CART, REMOVE_COUNTRIES_CART } from '../../types'

const initialState = {
  cart: [],
}

export function cartReducer(state = initialState, action) {
  // console.log('initialState:', initialState)
  // console.log('action:', action)
  switch (action.type) {
    case ADD_COUNTRIES_CART: {
      // console.log('ADD_COUNTRIES_CART from ACTION')
      // console.log('ACTION:', action)
      const { payload } = action
      return {
        ...state,
        cart: state.cart.concat(payload),
      }
    }
    case REMOVE_COUNTRIES_CART: {
      // console.log('REMOVE_COUNTRIES_CART from ACTION')
      // console.log('ACTION:', action)
      const { payload } = action
      return {
        ...state,
        cart: state.cart.filter((country) => country !== payload),
      }
    }

    default:
      return state
  }
}
