import {
  ADD_COUNTRIES_CART,
  REMOVE_COUNTRIES_CART,
  CountryType,
  AddCountryAction,
  RemoveCountryAction,
} from '../../types'

export function addCountry(country: CountryType): AddCountryAction {
  return {
    type: ADD_COUNTRIES_CART,
    payload: { country },
  }
}

export function removeCountry(country: CountryType): RemoveCountryAction {
  return {
    type: REMOVE_COUNTRIES_CART,
    payload: { country },
  }
}
