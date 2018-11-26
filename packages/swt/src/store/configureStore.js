import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import api from './middleware/api'
import rootReducer from '../reducers'

const configureStore = (initialState, history) => {
  const enhancer = compose(
    applyMiddleware(
      routerMiddleware(history),
      api(history),
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )

  const reducer = connectRouter(history)(rootReducer)

  const store = createStore(reducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducer))
  }

  const persistor = persistStore(store)

  return {
    store,
    persistor,
  }
}

export default configureStore
