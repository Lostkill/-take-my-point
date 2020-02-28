import React from 'react'
import styled, { withTheme } from 'styled-components'

import LogoCompany from '../components/logo-img'
import TextField from '../components/text-field'
import Button from '@material-ui/core/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const LoginView = props => (
  <div>
    <BackgroundEffect>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
        <LogoCompany />
        <LoginTitle>{props.theme.enterpriseName}</LoginTitle>
        <LoginFormWrapper className='col-xs-12 col-md-6 col-lg-3'>
          <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
            <TextField
              label='E-Mail'
              value={props.fieldsValues.email}
              onChange={props.handleChange('email')}
            />
            <TextField
              label='Password'
              value={props.fieldsValues.password}
              onChange={props.handleChange('password')}
              type='password'
            />
            {props.error ? <LoginTextError>{props.error}</LoginTextError> : null}
          </div>
          <ButtonWrapper>
            <Button
              variant='contained'
              color='primary'
              onClick={() => props.handleSubmit()}
              fullWidth
              style={{ borderRadius: '0px' }}
            >
              <div>
                Acessar
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
            </Button>
            <div className='d-flex justify-content-center align-items-center'>
              <a href='/register'>Don't have an account?</a>
            </div>
          </ButtonWrapper>
        </LoginFormWrapper>
      </div>
    </BackgroundEffect>
  </div>
)

export default withTheme(LoginView)

const BackgroundEffect = styled.div`
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  background-color: ${props => props.theme.light_color};
  flex: 1;
`
const LoginTitle = styled.h1`
  color: white;
  font-weight: 200;
  font-size: 60px;
`
const LoginFormWrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 0;
`
const LoginTextError = styled.div`
  color: red;
  font-size: 12px;
`
const ButtonWrapper = styled.div`
  width: 100%;
`
