import React from 'react'
import './Assets/SCSS/index.scss'
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
import StatsPage from './Components/Pages/StatsPage'
import MomentUtils from '@date-io/moment'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'



const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistore}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <div className="App">
                        <Router>
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path={'/'} component={HomePage} />
                                    <AnonymRoute exact path={'/login'} component={LoginPage} />
                                    <AnonymRoute exact path={'/signup'} component={SignupPage} />
                                    <PrivateRoute exact path={'/statistics'} component={StatsPage} />
                                </Switch>
                            </div>
                            <Navbar />
                        </Router>
                    </div>
                </MuiPickersUtilsProvider>
            </PersistGate>
        </Provider>
    )
}

export default App
