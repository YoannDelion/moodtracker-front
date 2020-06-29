import { loadingUi, stopLoadingUi } from '../slices/uiSlice'
import { fetchedPrimaryFeelings } from '../slices/feelingsSlice'
import axios from 'axios'
import { API_URL } from '../../config'

/**
 * Fetch all primary feelings
 * @returns {function(...[*]=)}
 */
export const getPrimaryFeelings = () => async dispatch => {
    dispatch(loadingUi())

    try {
        const feelings = await axios.get(`${API_URL}/feelings/primary`)
            .then(response => {
                return response.data
            })
        dispatch(fetchedPrimaryFeelings(feelings))
        dispatch(stopLoadingUi())
    } catch (e) {
        dispatch(stopLoadingUi())
        return Promise.reject(e)
    }
}