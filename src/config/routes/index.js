import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import i18n from '../i18n'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import SessionProvider from '../../providers/session-provider'
import enterpriseSettings from '../enterprises'

import Login from '../../containers/login-container'
import AppRoutes from './routes'

function Routes (props) {
  const company = 'solides'
  useEffect(() => {
    document.title = `${enterpriseSettings[company].name} | TMP`
  }, [])

  const PrivateRoute = ({ component: Component, token, hello, ...rest }) => {
    if (props.user) i18n.setLocale(props.user.language)
    return (<Route {...rest} hello render={(props) => token ? (<Component {...props} />) : (<Redirect to='/login' />)} />)
  }

  const LoginRoute = ({ component: Component, token, ...rest }) => {
    return (<Route {...rest} render={(props) => token ? (<Redirect to='/app/point' />) : (<Component {...props} />)} />)
  }

  if (props.location.pathname === '/' || props.location.pathname === '/app') {
    if (props.isLogged) {
      return <Redirect to='/app/dashboard' />
    } else {
      return <Redirect to='/login' />
    }
  }

  return (
    <div className='app-main' enterprise={enterpriseSettings[company]}>
      <BrowserRouter>
        <Switch>
          <SessionProvider
            token={props.token}
          >
            {
              (tokenIsValid) => {
                return (
                  <>
                    <PrivateRoute path='/app' token={tokenIsValid && props.isLogged} component={AppRoutes} />
                    <LoginRoute path='/login' token={tokenIsValid} component={Login} />
                  </>
                )
              }
            }
          </SessionProvider>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = ({ LoginDuck }) => {
  const { isLogged, token, user } = LoginDuck

  return {
    isLogged,
    token,
    user
  }
}

export default connect(mapStateToProps, null)(Routes)
