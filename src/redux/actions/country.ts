import axios from 'axios'
import { Dispatch } from 'redux'
import {
  LOAD_COUNTRY_REQUEST,
  LOAD_COUNTRY_FAILURE,
  LOAD_COUNTRY_SUCCESS,
  CountryType,
  FetchAllCountriesRequestAction,
  FetchAllCountriesSuceessAction,
  FetchAllCountriesFailureAction,
} from '../../types'

// Error Action
export function loadCountryRequest(): FetchAllCountriesRequestAction {
  return {
    type: LOAD_COUNTRY_REQUEST,
  }
}

// Success Action
export function loadCountrysSuccess(
  payload: CountryType[]
): FetchAllCountriesSuceessAction {
  return {
    type: LOAD_COUNTRY_SUCCESS,
    payload,
  }
}

// Failure Action
export function loadCountryFailure(
  msg: string
): FetchAllCountriesFailureAction {
  return {
    type: LOAD_COUNTRY_FAILURE,
    payload: {
      msg,
    },
  }
}

// Redux Thunk To Fetch Data from url
export function getContriesThunk(url: string) {
  return async function (dispatch: Dispatch) {
    //send request
    dispatch(loadCountryRequest())

    try {
      const request = await axios.get(url)
      // extract only essential data
      const countriesData: CountryType[] = []
      request.data.map((country: any) =>
        countriesData.push({
          id: country.name.common as string,
          name: country.name.common as string,
          languages: country.languages,
          region: country.region as string,
          population: country.population as number,
          flags: country.flags.svg as string,
          borders: country.borders as string[],
        })
      )
      dispatch(loadCountrysSuccess(countriesData))
      // console.log('Requestafter:', countriesData)
    } catch (error) {
      // if (error.response.status === 404) {
      //   dispatch(loadCountryFailure('Resource is not found'))
      //   return
      // }
      return dispatch(loadCountryFailure('Something went wrong'))
    }
  }
}
