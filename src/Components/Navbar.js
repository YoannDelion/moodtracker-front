import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/services/authServices'
import { toggleDetailModal } from '../redux/services/uiService'
// Material UI
import ExitToApp from '@material-ui/icons/ExitToApp'
import BarChartIcon from '@material-ui/icons/BarChart'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import AppBar from '@material-ui/core/AppBar'
import MoodIcon from '@material-ui/icons/Mood'
import AddIcon from '@material-ui/icons/Add'

const Navbar = ({ isLogged, logoutUser, hasCurrentEntry, isModalOpen, toggleDetailModal }) => {

    const handleLogout = () => logoutUser()

    const isHomePage = useRouteMatch({
        path: '/',
        exact: true
    })

    return (
        isLogged && <AppBar position="fixed" className='navbar' color='default'>
            <Toolbar className='toolbar'>
                <IconButton edge='start' component={Link} to='/statistics'>
                    <BarChartIcon />
                </IconButton>
                <Fab aria-label="add" color='primary' style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: -30,
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                }} component={Link} to='/'>
                    {isHomePage && hasCurrentEntry ? <AddIcon style={{ color: 'white' }} onClick={() => toggleDetailModal(!isModalOpen)} /> : <MoodIcon style={{ color: 'white' }} />}
                </Fab>
                <IconButton onClick={handleLogout}>
                    <ExitToApp />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged,
    hasCurrentEntry: state.entries.currentEntry,
    isModalOpen: state.ui.isModalOpen
})

export default connect(mapStateToProps, { logoutUser, toggleDetailModal })(Navbar)