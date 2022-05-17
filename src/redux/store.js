import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './reducer'

export default function configureStore() {
  const storeInitialState = {
    country: {
      data: [],
      loading: false,
      error: '',
    },
    carts: {
      cart: [],
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
