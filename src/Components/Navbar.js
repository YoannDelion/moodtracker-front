import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/services/authServices'
// Material UI
import ExitToApp from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import BarChartIcon from '@material-ui/icons/BarChart'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

const Navbar = ({ isLogged, logoutUser }) => {
    const handleLogout = () => logoutUser()

    return (
        isLogged && <BottomNavigation className='navbar'>
            <BottomNavigationAction component={Link} to={'/statistics'} icon={<BarChartIcon />} />
            <BottomNavigationAction component={Link} to={'/'} icon={<HomeIcon />} />
            <BottomNavigationAction onClick={handleLogout} icon={<ExitToApp />} />
        </BottomNavigation>
    )
}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps, { logoutUser })(Navbar)