import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  return (
    <div>
      <AppBar
        position='fixed'
        elevation0
      >
        <div>
          <HeaderToolbar enterprise={props.enterprise}>
            <div className='d-flex justify-content-center align-items-center'>
              <HeaderIconWrapper>
                <LogoCompany
                  enterprise={props.enterprise}
                  width={40}
                />
              </HeaderIconWrapper>

              <HeaderTypography variant='h6'>
                {props.enterprise.name}
              </HeaderTypography>
            </div>

            <Tooltip title='Sair' placement='bottom'>
              <IconButton onClick={() => props.setLogout()}>
                <FontAwesomeIcon style={{ color: 'white' }} className='fa-xs' icon={faSignOutAlt} />
              </IconButton>
            </Tooltip>
          </HeaderToolbar>
          <Menu enterprise={props.enterprise} className='d-flex'>
            <div>
              {props.menu.map((item) => (
                <Tooltip title={item.text} placement='bottom' key={item.name}>
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
        </div>
      </AppBar>
    </div>
  )
}

export default HeaderBar

const HeaderToolbar = styled(Toolbar)`
  background-color: ${props => props.enterprise.light_color};
  justify-content: space-between;
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
  background-color: ${props => props.enterprise.primary_color};
`
