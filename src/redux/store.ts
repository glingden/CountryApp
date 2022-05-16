import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { AppState } from '../types'

import { rootReducer } from './reducers/index'

export default function configureStore() {
  const storeInitialState: AppState = {
    country: {
      countryData: [],
      loading: false,
      error: '',
    },
    cart: {
      cartData: [],
    },
  }
  const middlewares = [thunkMiddleware]

  // const middlewareEnhancer = applyMiddleware(...middlewares)
  // const enhancers = [middlewareEnhancer]
  // const composedEnhancers = compose(...enhancers)

  const store = createStore(
    rootReducer,
    storeInitialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )

  return store
}
