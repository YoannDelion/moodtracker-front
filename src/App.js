import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import LoginPage from './Components/Pages/LoginPage'
import Navbar from './Components/Navbar'
import SignupPage from './Components/Pages/SignupPage'
import PrivateRoute from './Components/PrivateRoute'
import AnonymRoute from './Components/AnonymRoute'
import { persistore } from './redux/store'
import store from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// Material UI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import uiTheme from './utils/theme'

const theme = createMuiTheme(uiTheme)

const App = () => {
    return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistore}>
              <MuiThemeProvider theme={theme}>
                  <div className="App">
                      <Router>
                          <Navbar/>
                          <div className="container">
                              <Switch>
                                  <PrivateRoute exact path={'/'} component={HomePage}/>
                                  <AnonymRoute exact path={'/login'} component={LoginPage}/>
                                  <AnonymRoute exact path={'/signup'} component={SignupPage}/>
                              </Switch>
                          </div>
                      </Router>
                  </div>
              </MuiThemeProvider>
          </PersistGate>
      </Provider>
    )
}

export default App
