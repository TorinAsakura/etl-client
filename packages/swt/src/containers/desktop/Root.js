import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { PersistGate } from 'redux-persist/es/integration/react'
import Preload from '../Preload'
import IntlProvider from '../IntlProvider'
import Routes from './Routes'

const Root = ({ store, history, persistor }) => (
  <DragDropContextProvider backend={HTML5Backend}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Preload history={history}>
          <IntlProvider>
            <ConnectedRouter history={history}>
              <Routes />
            </ConnectedRouter>
          </IntlProvider>
        </Preload>
      </PersistGate>
    </Provider>
  </DragDropContextProvider>
)


export default hot(module)(Root)
