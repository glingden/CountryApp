// Action types
export const LOAD_COUNTRY_REQUEST = 'LOAD_TODOS_REQUEST'
export const LOAD_COUNTRY_SUCCESS = 'LOAD_TODOS_SUCCESS'
export const LOAD_COUNTRY_FAILURE = 'LOAD_TODOS_FAILURE'
export const ADD_COUNTRIES_CART = 'ADD_COUNTRIES'
export const REMOVE_COUNTRIES_CART = 'REMOVE_COUNTRIES'

// Countries Data type
export type CountryType = {
  id: string
  name: string
  flags: string
  region: string
  languages: string
  population: number
  borders: string[]
}

export type CountryPropsType = {
  countryProps: CountryType[]
}
// Data Fetch Action Types
export type FetchAllCountriesRequestAction = {
  type: typeof LOAD_COUNTRY_REQUEST
}

export type FetchAllCountriesSuceessAction = {
  type: typeof LOAD_COUNTRY_SUCCESS
  payload: CountryType[]
}

export type FetchAllCountriesFailureAction = {
  type: typeof LOAD_COUNTRY_FAILURE
  payload: {
    msg: string
  }
}

// InCart Add Action Types
export type AddCountryAction = {
  type: typeof ADD_COUNTRIES_CART
  payload: {
    country: CountryType
  }
}

// InCart Remove Action Types
export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRIES_CART
  payload: {
    country: CountryType
  }
}

// Use All actions as  union in reducer
export type CountryAllActions =
  | AddCountryAction
  | RemoveCountryAction
  | FetchAllCountriesRequestAction
  | FetchAllCountriesSuceessAction
  | FetchAllCountriesFailureAction

// Country Payload types
export type CountryState = {
  countryData: CountryType[]
  loading: boolean
  error: string
}

// Country Card Payload types
export type CartState = {
  cartData: CountryType[]
}

//App State
export type AppState = {
  country: CountryState
  cart: CartState
}
