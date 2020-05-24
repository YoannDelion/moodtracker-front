import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const AnonymRoute = ({ isLogged, path, component }) => !isLogged ? <Route path={path} component={component}/> :
  <Redirect to={'/'}/>

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(AnonymRoute)