import React, { useContext } from 'react'
import { connect } from 'react-redux'
import compose from 'compose'
import styled, { ThemeContext } from 'styled-components'
import { Link } from 'react-router-dom'
import { logout } from '../../@takeMyPoint/ducks/user-duck'
import { clearPoints } from '../../@takeMyPoint/ducks/point-duck'

import i18n from '../../config/i18n'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import LogoCompany from '../logo-img'
import Status from '../status'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function HeaderBar (props) {
  const theme = useContext(ThemeContext)
  return (
    <AppBar
      position='fixed'
      style={{ padding: '0' }}
    >
      <HeaderToolbar theme={theme} className='d-flex flex-column'>
        <FirstHeader>
          <div className='d-flex justify-content-center align-items-center'>
            <HeaderIconWrapper className='d-flex justify-content-center'>
              <LogoCompany
                width={40}
              />
            </HeaderIconWrapper>

            <HeaderTypography variant='h6'>
              {theme.enterpriseName}
            </HeaderTypography>
          </div>

          <Tooltip title={`${i18n.translate('logout')}`} placement='bottom'>
            <IconButton onClick={() => props.logout()}>
              <FontAwesomeIcon style={{ color: 'white' }} className='fa-xs' icon={faSignOutAlt} />
            </IconButton>
          </Tooltip>
        </FirstHeader>
        <SecondHeader>
          <Menu className='d-flex' theme={theme}>
            <div>
              {props.menu.map((item) => (
                <Tooltip title={`${i18n.translate(`menu.${item.name}`)}`} placement='bottom' key={item.name}>
                  <Link to={item.link}>
                    <IconButton>
                      <FontAwesomeIcon style={{ color: 'white' }} className='fa-xs' icon={item.icon} />
                    </IconButton>
                  </Link>
                </Tooltip>
              ))}
            </div>
            <Status status={{ active: props.activePoint }} />
          </Menu>
        </SecondHeader>
      </HeaderToolbar>
    </AppBar>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearPoints: () => dispatch(clearPoints())
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(HeaderBar)

const HeaderToolbar = styled(Toolbar)`
  background-color: ${props => props.theme.light_color};
  padding: 0;
`
const FirstHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`
const SecondHeader = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`
const HeaderIconWrapper = styled.div`
  height: 100%;
  margin: 10px;
  justify-content: center;
`
const HeaderTypography = styled(Typography)`
  font-size: '25px';
  fontWeight: '300';
  color: 'white';
`
const Menu = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  justify-content: space-between;
  background-color: ${props => props.theme.primary_color};
`
