import React from 'react'
import styled from 'styled-components'

import TextField from '../text-field'
import NativeSelect from '@material-ui/core/NativeSelect'
import IconButton from '@material-ui/core/IconButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faSave } from '@fortawesome/free-solid-svg-icons'

function ProfileEdit (props) {
  return (
    <div>
      <div className='d-flex justify-content-end align-items-end'>
        <IconButton onClick={() => props.setEdit(true)}>
          <FontAwesomeIcon icon={faPenSquare} size='fa-sm' />
        </IconButton>
      </div>
      <div className='row'>
        <div class='col-sm-6 col-md-12 col-lg-12'>
          <TextField
            label='Username'
            fullWidth
            value={props.fieldsValues.username}
            onChange={props.onHandleChange('username')}
          />
        </div>
        <div class='col-sm-6 col-md-12 col-lg-12'>
          <TextField
            label='E-Mail'
            fullWidth
            value={props.fieldsValues.email}
            onChange={props.onHandleChange('email')}
          />
        </div>
        <div class='col-sm-6 col-md-12 col-lg-12'>
          <LanguageWrapper>
            <NativeSelect
              label='E-Mail'
              id='demo-customized-select-native'
              value={props.fieldsValues.language}
              onChange={props.onHandleChange('language')}
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
        </div>
      </div>
      {
        !props.isFetching
          ? (
            <div className='d-flex justify-content-end align-items-end'>
              <IconButton onClick={() => props.onHandleSubmit()}>
                <FontAwesomeIcon icon={faSave} size='fa-sm' color='primary' />
              </IconButton>
            </div>
          ) : null
      }
    </div>
  )
}

export default ProfileEdit

const LanguageWrapper = styled.div`
  margin: 15px 0px;
`
