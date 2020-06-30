import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../../redux/services/authServices'
import { Happy } from '../../Assets/mood-icons/index'
//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import DraftsIcon from '@material-ui/icons/Drafts'
import InputAdornment from '@material-ui/core/InputAdornment'
import LockIcon from '@material-ui/icons/Lock'

const LoginPage = ({ history, loginUser, isLoading }) => {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setCredentials({ ...credentials, [name]: value })
    }
    const handleSubmit = async event => {
        event.preventDefault()

        try {
            await loginUser(credentials, history)
        } catch (e) {
            setErrors(e.response.data)
        }
    }

    return (
        <Grid container >
            <div className='formContainer'>
                <img src={Happy} alt='Happy face' />
                <Typography variant='h4' component='h1'>Welcome back!</Typography>

                <form className='form' onSubmit={handleSubmit} noValidate>
                    <TextField id="email" name='email' label="Email" type='email' onChange={handleChange}
                        value={credentials.email} fullWidth className='textField'
                        helperText={errors.email} error={!!errors.email}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DraftsIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField id="password" name='password' label="Password" type='password' onChange={handleChange}
                        value={credentials.password} fullWidth className='textField'
                        helperText={errors.password} error={!!errors.password}
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
                        Login
                      {isLoading && <CircularProgress size={30} className='progress' />}
                    </Button>
                </form>
                <Button className='button' component={Link} to={'/signup'} variant='text'>Don't have an account ? Sign up here</Button>
            </div>
        </Grid>
    )
}

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading
})

export default connect(mapStateToProps, { loginUser })(LoginPage)