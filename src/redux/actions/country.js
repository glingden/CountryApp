import axios from 'axios'
import {
  LOAD_COUNTRY_REQUEST,
  LOAD_COUNTRY_FAILURE,
  LOAD_COUNTRY_SUCCESS,
} from '../../types'

// Error Action
export function loadCountryRequest() {
  return {
    type: LOAD_COUNTRY_REQUEST,
  }
}

// Success Action
export function loadCountrysSuccess(payload) {
  return {
    type: LOAD_COUNTRY_SUCCESS,
    payload,
  }
}

// Failure Action
export function loadCountryFailure(msg) {
  return {
    type: LOAD_COUNTRY_FAILURE,
    payload: {
      msg,
    },
  }
}

// Redux Thunk To Fetch Data from url
export function getContriesThunk(url) {
  return async function (dispatch) {
    //send request
    dispatch(loadCountryRequest(url))

    try {
      const request = await axios.get(url)
      // console.log('Request:', request)
      dispatch(loadCountrysSuccess(request.data))
      // console.log('Current State:', getState())
    } catch (error) {
      if (error.response.status === 404) {
        dispatch(loadCountryFailure('Resource is not found'))
        return
      }
      return dispatch(loadCountryFailure('Something went wrong'))
    }
  }
}
