import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers'

const configureStore = (initialState, history) => {
  const enhancer = compose(
    applyMiddleware(routerMiddleware(history)),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )

  const persistConfig = {
    key: 'root',
    storage,
  }

  const reducer = connectRouter(history)(persistReducer(persistConfig, rootReducer))

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
