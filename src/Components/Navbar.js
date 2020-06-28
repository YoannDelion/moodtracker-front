import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/services/authServices'
// Material UI
import ExitToApp from '@material-ui/icons/ExitToApp'
import HomeIcon from '@material-ui/icons/Home'
import BarChartIcon from '@material-ui/icons/BarChart'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import AppBar from '@material-ui/core/AppBar'
import MoodIcon from '@material-ui/icons/Mood'
import AddIcon from '@material-ui/icons/Add'

const Navbar = ({ isLogged, logoutUser, hasCurrentEntry }) => {

    const handleLogout = () => logoutUser()

    const isHomePage = useRouteMatch({
        path: '/',
        exact: true
    })

    return (
        isLogged && <AppBar position="fixed" className='navbar' >
            <Toolbar className='toolbar'>
                <IconButton edge='start' component={Link} to='/statistics'>
                    <BarChartIcon />
                </IconButton>
                <Fab aria-label="add" style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: -30,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                }} component={Link} to='/'>
                    {isHomePage && hasCurrentEntry ? <AddIcon /> : <MoodIcon />}
                </Fab>
                <IconButton edge='center' onClick={handleLogout}>
                    <ExitToApp />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged,
    hasCurrentEntry: state.entries.currentEntry
})

export default connect(mapStateToProps, { logoutUser })(Navbar)