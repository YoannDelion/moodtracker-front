import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ isLogged, path, component }) => isLogged ? <Route path={path} component={component}/> :
  <Redirect to={'/login'}/>

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(PrivateRoute)