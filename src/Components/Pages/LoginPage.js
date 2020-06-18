import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../../redux/services/authServices'
//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'


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
        <Grid container maxWidth='sm'>
            <div className='formContainer'>
                <Typography variant='h4' component='h1'>Login Page</Typography>

                <form className='form' onSubmit={handleSubmit} noValidate>
                    <TextField id="email" name='email' label="Email" type='email' onChange={handleChange}
                        value={credentials.email} fullWidth className='textField'
                        helperText={errors.email} error={!!errors.email}
                    />
                    <TextField id="password" name='password' label="Password" type='password' onChange={handleChange}
                        value={credentials.password} fullWidth className='textField'
                        helperText={errors.password} error={!!errors.password}
                    />
                    {errors.general &&
                        <Typography variant='body2' className='customError'>{errors.general}</Typography>}
                    <Button type='submit' variant="contained" color="primary" className='button'
                        disabled={isLoading}>
                        Login
                      {isLoading && <CircularProgress size={30} className='progress' />}
                    </Button>
                </form>
                <Typography variant={'caption'}>Don't have an account ? Sign up <Link
                    to={'/signup'}>here</Link></Typography>
            </div>
        </Grid>
    )
}

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading
})

export default connect(mapStateToProps, { loginUser })(LoginPage)