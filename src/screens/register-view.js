import React from 'react'
import styled from 'styled-components'

import LogoCompany from '../components/logo-img'
import TextField from '../components/text-field'
import NativeSelect from '@material-ui/core/NativeSelect'
import Button from '@material-ui/core/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const LoginView = props => (
  <div>
    <BackgroundEffect enterprise={props.enterprise}>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
        <LogoCompany
          enterprise={props.enterprise}
        />
        <RegisterTitle>{props.enterprise.name}</RegisterTitle>
        <RegisterFormWrapper className='col-xs-12 col-md-6 col-lg-3'>
          <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100%' }}>
            <div>
              <TextField
                label='Username'
                value={props.fieldsValues.username}
                onChange={props.handleChange('username')}
              />
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
              <LanguageWrapper>
                <NativeSelect
                  id='demo-customized-select-native'
                  value={props.fieldsValues.language}
                  onChange={props.handleChange('language')}
                  inputProps={{
                    name: 'language',
                    id: 'outlined-age-native-simple'
                  }}
                  fullWidth
                >
                  <option value='pt'>pt-BR</option>
                  <option value='en'>en-US</option>
                </NativeSelect>
              </LanguageWrapper>
              {props.error ? <TextError>{props.error}</TextError> : null}
            </div>
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
                Register
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
            </Button>
          </ButtonWrapper>
        </RegisterFormWrapper>
      </div>
    </BackgroundEffect>
  </div>
)

export default LoginView

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
const RegisterTitle = styled.h1`
  color: white;
  font-weight: 200;
  font-size: 60px;
`
const RegisterFormWrapper = styled.div`
  background-color: white;
  width: 100%;
  padding: 0;
`
const LanguageWrapper = styled.div`
  margin: 15px 0px;
`
const TextError = styled.div`
  color: red;
  font-size: 12px;
`
const ButtonWrapper = styled.div`
  width: 100%;
`
