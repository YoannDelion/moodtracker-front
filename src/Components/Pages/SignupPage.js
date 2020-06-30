import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadingUi, stopLoadingUi } from '../../redux/slices/uiSlice'
import { Link } from 'react-router-dom'
import { Happy } from '../../Assets/mood-icons/index'
import { API_URL } from '../../config'

//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import DraftsIcon from '@material-ui/icons/Drafts'
import InputAdornment from '@material-ui/core/InputAdornment'
import LockIcon from '@material-ui/icons/Lock'

const SignupPage = ({ history, isLoading, dispatch }) => {

    const [errors, setErrors] = useState({})
    const [newUser, setNewUser] = useState({ email: '', password: '', confirmPassword: '', firstName: '' })

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setNewUser({ ...newUser, [name]: value })
    }
    const handleSubmit = event => {
        event.preventDefault()
        dispatch(loadingUi())

        axios.post(`${API_URL}/signup`, newUser)
            .then(response => {
                dispatch(stopLoadingUi())
                history.push('/login')
            })
            .catch(errors => {
                setNewUser({ ...newUser, password: '', confirmPassword: '' })
                setErrors(errors.response.data)
                dispatch(stopLoadingUi())
            })
    }

    return (
        <Grid container maxWidth='sm'>
            <div className='formContainer'>

                <img src={Happy} alt='Happy Face' />
                <Typography variant='h4' component='h1'>Welcome! Sign up here</Typography>

                <form className='form' onSubmit={handleSubmit} noValidate>
                    <TextField id="email" name='email' label="Email" type='email' onChange={handleChange}
                        value={newUser.email} fullWidth className='textField'
                        helperText={errors.email} error={!!errors.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DraftsIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField id="firstName" name='firstName' label="First name" type='text' onChange={handleChange}
                        value={newUser.firstName} fullWidth className='textField'
                        helperText={errors.firstName} error={!!errors.firstName}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField id="password" name='password' label="Password" type='password' onChange={handleChange}
                        value={newUser.password} fullWidth className='textField'
                        helperText={errors.password} error={!!errors.password}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField id="confirmPassword" name='confirmPassword' label="Confirm Password" type='password'
                        onChange={handleChange}
                        value={newUser.confirmPassword} fullWidth className='textField'
                        helperText={errors.confirmPassword} error={!!errors.confirmPassword}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    {errors.general &&
                        <Typography variant='body2' className='customError'>{errors.general}</Typography>}
                    <Button type='submit' variant="contained" color="primary" className='button'
                        disabled={isLoading}>
                        Signup
                      {isLoading && <CircularProgress size={30} className='progress' />}
                    </Button>
                </form>
                <Button className='button' component={Link} to={'/login'} variant='text'>Already have an account ? Log in here</Button>
            </div>
        </Grid>
    )
}

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading
})

export default connect(mapStateToProps, null)(SignupPage)