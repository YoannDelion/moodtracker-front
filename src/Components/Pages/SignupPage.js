import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { loadingUi, stopLoadingUi } from '../../redux/slices/uiSlice'
import { Link } from 'react-router-dom'

//Material UI
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({ ...theme.form })

const SignupPage = ({ classes, history, isLoading, dispatch }) => {

    const [errors, setErrors] = useState({})
    const [newUser, setNewUser] = useState({ email: '', password: '', confirmPassword: '', firstName: '' })

    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setNewUser({ ...newUser, [name]: value })
    }
    const handleSubmit = event => {
        event.preventDefault()
        dispatch(loadingUi())

        axios.post('/signup', newUser)
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
      <Grid container>
          <Grid item sm/>
          <Grid item sm className={classes.formContainer}>
              <Typography variant='h4' component='h1'>Signup Page</Typography>

              <form className={classes.form} onSubmit={handleSubmit} noValidate>
                  <TextField id="email" name='email' label="Email" type='email' onChange={handleChange}
                             value={newUser.email} fullWidth className={classes.textField}
                             helperText={errors.email} error={!!errors.email}
                  />
                  <TextField id="firstName" name='firstName' label="First name" type='firstName' onChange={handleChange}
                             value={newUser.firstName} fullWidth className={classes.textField}
                             helperText={errors.firstName} error={!!errors.firstName}
                  />
                  <TextField id="password" name='password' label="Password" type='password' onChange={handleChange}
                             value={newUser.password} fullWidth className={classes.textField}
                             helperText={errors.password} error={!!errors.password}
                  />
                  <TextField id="confirmPassword" name='confirmPassword' label="Confirm Password" type='password'
                             onChange={handleChange}
                             value={newUser.confirmPassword} fullWidth className={classes.textField}
                             helperText={errors.confirmPassword} error={!!errors.confirmPassword}
                  />
                  {errors.general &&
                  <Typography variant='body2' className={classes.customError}>{errors.general}</Typography>}
                  <Button type='submit' variant="contained" color="primary" className={classes.button}
                          disabled={isLoading}>
                      Signup
                      {isLoading && <CircularProgress size={30} className={classes.progress}/>}
                  </Button>
              </form>
              <Typography variant={'caption'}>Already have an account ? Log in <Link
                to={'/login'}>here</Link></Typography>
          </Grid>
          <Grid item sm/>
      </Grid>
    )
}

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading
})

export default connect(mapStateToProps, null)(withStyles(styles)(SignupPage))