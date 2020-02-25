import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HOME from '../../containers/home-container'
import HISTORY from '../../containers/history-container'

function Routes () {
  return (
    <div>
      <BrowserRouter>
        <Route path='/app/point' component={HOME} />
        <Route path='/app/history' component={HISTORY} />
      </BrowserRouter>
    </div>
  )
}

export default Routes
