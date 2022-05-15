import { ADD_COUNTRIES_CART, REMOVE_COUNTRIES_CART } from '../types'

export function addCountry(payload) {
  return {
    type: ADD_COUNTRIES_CART,
    payload: payload,
  }
}

export function removeCountry(payload) {
  return {
    type: REMOVE_COUNTRIES_CART,
    payload: payload,
  }
}
