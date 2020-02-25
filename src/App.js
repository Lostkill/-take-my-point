import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './config/routes/'

import { Provider } from 'react-redux'
import { store, persistor } from './config/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

require('dotenv').config()
function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Routes} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
