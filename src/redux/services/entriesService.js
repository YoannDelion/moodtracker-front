import { loadingUi, stopLoadingUi } from '../slices/uiSlice'
import { addNewEntry, deleteCurrentEntryFromStore, selectMonth } from '../slices/entriesSlice'
import axios from 'axios'
import { fetchedAllEntries } from '../slices/entriesSlice'
import store from '../store'
import { API_URL } from '../../config'

/**
 * Post a new entry
 * @param entry
 * @returns {function(...[*]=)}
 */
export const postNewEntry = (entry, updating) => async dispatch => {
    dispatch(loadingUi())
    try {
        await axios.post(`${API_URL}/entry`, entry)
            .then(response => response.data)

        //todo: refacto
        const feeling = store.getState().feelings.primaryFeelings.find(feeling => feeling.feelingId === entry.feelingId)
        entry.feeling = feeling

        if (updating) dispatch(deleteCurrentEntryFromStore())

        dispatch(addNewEntry(entry))
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
        const entries = await axios.get(`${API_URL}/entries`)
            .then(response => response.data)
        dispatch(fetchedAllEntries(entries))
        dispatch(stopLoadingUi())
    } catch (e) {
        dispatch(stopLoadingUi())
        return Promise.reject(e)
    }
}

/**
 * Select month to filter entries for statistics
 */
export const selectMonthForStatistics = month => dispatch => dispatch(selectMonth(month))