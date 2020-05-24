import { combineReducers } from 'redux'
import authReducer from './slices/authSlice'
import uiReducer from './slices/uiSlice'
import entriesReducer from './slices/entriesSlice'
import feelingsReducer from './slices/feelingsSlice'

export default combineReducers({
    auth: authReducer,
    ui: uiReducer,
    entries: entriesReducer,
    feelings: feelingsReducer
})