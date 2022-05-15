import {
  LOAD_COUNTRY_REQUEST,
  LOAD_COUNTRY_FAILURE,
  LOAD_COUNTRY_SUCCESS,
} from '../types'

const initialState = {
  loading: false,
  data: [],
  error: '',
}

export function countryReducer(state = initialState, action) {
  // console.log('initialState:', initialState)
  // console.log('action:', action)
  switch (action.type) {
    case LOAD_COUNTRY_REQUEST: {
      // console.log('LOAD_TODOS_REQUEST from ACTION')
      return {
        ...state,
        loading: true,
      }
    }
    case LOAD_COUNTRY_SUCCESS: {
      // console.log('LOAD_TODOS_SUCCESS from ACTION')
      // console.log('ACTION:', action)
      const { payload } = action
      return {
        ...state,
        data: payload,
        loading: false,
      }
    }
    case LOAD_COUNTRY_FAILURE: {
      // console.log('LOAD_TODOS_FAILURE from ACTION')
      // console.log('ACTION:', action)
      const {
        payload: { msg },
      } = action
      return {
        ...state,
        error: msg,
        loading: false,
      }
    }

    default:
      return state
  }
}
