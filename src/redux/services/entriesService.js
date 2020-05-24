import { loadingUi, stopLoadingUi } from '../slices/uiSlice'
import { addNewEntry } from '../slices/entriesSlice'
import axios from 'axios'
import { fetchedAllEntries } from '../slices/entriesSlice'

/**
 * Post a new entry
 * @param entry
 * @returns {function(...[*]=)}
 */
export const postNewEntry = entry => async dispatch => {
    dispatch(loadingUi())
    try {
        await axios.post('/entry', entry)
          .then(response => response.data)
        dispatch(addNewEntry(entry))
        //todo update entry
        dispatch(stopLoadingUi())
    } catch (e) {
        dispatch(stopLoadingUi())
        return Promise.reject(e)
    }
}

/**
 * Fetch all entries of the user
 * @returns {function(...[*]=)}
 */
export const fetchAllEntries = () => async dispatch => {
    dispatch(loadingUi())
    try {
        const entries = await axios.get('/entries')
          .then(response => response.data)
        dispatch(fetchedAllEntries(entries))
        dispatch(stopLoadingUi())
    } catch (e) {
        dispatch(stopLoadingUi())
        return Promise.reject(e)
    }
}