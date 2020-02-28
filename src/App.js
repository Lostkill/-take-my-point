import React from 'react'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import Routes from './config/routes/'

import { Provider } from 'react-redux'
import { store, persistor } from './config/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import enterpriseSettings from './config/enterprises'

const company = 'solides'
const theme = {
  enterpriseName: enterpriseSettings[company].name,
  enterpriseLogo: enterpriseSettings[company].logo,
  primary_color: enterpriseSettings[company].primary_color,
  dark_color: enterpriseSettings[company].dark_color,
  light_color: enterpriseSettings[company].light_color
}

require('dotenv').config()
function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route path='/' component={Routes} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
