import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/services/authServices'
// Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import BarChartIcon from '@material-ui/icons/BarChart'

const Navbar = ({ isLogged, logoutUser }) => {
    const handleLogout = () => logoutUser()

    return (
      <AppBar>
          <Toolbar className='nav-container'>
              {isLogged ? <>
                  <Tooltip title='Statistics' placement='bottom'>
                      <IconButton component={Link} to={'/statistics'}>
                          <BarChartIcon color='inherit'/>
                      </IconButton>
                  </Tooltip>
                  <Tooltip title='Home' placement='bottom'>
                      <IconButton component={Link} to={'/'}>
                          <HomeIcon color='inherit'/>
                      </IconButton>
                  </Tooltip>
                  <Tooltip title='Logout' placement='bottom'>
                      <IconButton onClick={handleLogout}>
                          <ExitToApp color='inherit'/>
                      </IconButton>
                  </Tooltip>
              </> : <>
                  <Button color='inherit' component={Link} to='/login'>Login</Button>
                  <Button color='inherit' component={Link} to='/'>Home</Button>
                  <Button color='inherit' component={Link} to='/signup'>Signup</Button>
              </>}
          </Toolbar>
      </AppBar>
    )
}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps, { logoutUser })(Navbar)