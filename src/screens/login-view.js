import React from 'react'
import styled from 'styled-components'

import LogoCompany from '../components/logo-img'
import TextField from '../components/text-field'
import Button from '@material-ui/core/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const LoginView = props => (
  <div>
    <BackgroundEffect enterprise={props.enterprise}>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
        <LogoCompany
          enterprise={props.enterprise}
          width={240}
        />
        <LoginTitle>{props.enterprise.name}</LoginTitle>
        <LoginFormWrapper>
          <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
            <div>
              <TextField
                label='E-Mail'
                value={props.email}
                onChange={e => props.setEmail(e.target.value)}
              />
              <TextField
                label='Password'
                value={props.password}
                onChange={e => props.setPassword(e.target.value)}
                type='password'
              />
            </div>
          </div>
        </LoginFormWrapper>
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
        </ButtonWrapper>
      </div>
    </BackgroundEffect>
  </div>
)

export default LoginView

const BackgroundEffect = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  background-color: ${props => props.enterprise.light_color};
  flex: 1;
`
const LoginTitle = styled.h1`
  color: white;
  font-weight: 200;
  font-size: 60px;
`
const LoginFormWrapper = styled.div`
  background-color: white;
  width: 450px;
  height: 150px;
`
const ButtonWrapper = styled.div`
  width: 450px;
`
