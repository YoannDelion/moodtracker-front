import axios from 'axios'
import { login, logout } from '../slices/authSlice'
import { loadingUi, stopLoadingUi } from '../slices/uiSlice'
import { fetchedUserInfo } from '../slices/userSlice'
import { emptyEntries } from '../slices/entriesSlice'
import { fetchAllEntries } from './entriesService'
import { getPrimaryFeelings } from './feelingsService'
import { API_URL } from '../../config'

/**
 * Try to log in user and save axios headers
 * @param credentials
 * @returns {function(...[*]=)}
 */
export const loginUser = (credentials, history) => async dispatch => {
    dispatch(loadingUi())
    try {
        const data = await axios.post(`${API_URL}/login`, credentials)
            .then(response => response.data)
        const FBIdToken = `Bearer ${data.token}`

        axios.defaults.headers['Authorization'] = FBIdToken
        dispatch(login(FBIdToken))
        dispatch(fetchAllEntries())
        dispatch(getPrimaryFeelings())
        history.push('/')
    } catch (e) {
        dispatch(stopLoadingUi())
        return Promise.reject(e)
    }
}

/**
 * Logout user and delete axios headers
 * @returns {function(...[*]=)}
 */
export const logoutUser = () => dispatch => {
    dispatch(emptyEntries())
    dispatch(logout())
    delete axios.defaults.headers['Authorization']
}

export const fetchUserInfo = uid => dipatch => {
    axios.get(`${API_URL}/user/${uid}`)
        .then(response => dipatch(fetchedUserInfo(response.data)))
}