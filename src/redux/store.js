import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducer'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { fetchAllEntries } from './services/entriesService'
import { logoutUser } from './services/authServices'
import { getPrimaryFeelings } from './services/feelingsService'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: false,
    }),
    logger
]

const store = configureStore({
    reducer: persistedReducer,
    middleware
})

const persistore = persistStore(store, null, () => {
    const token = store.getState().auth.token
    if (token) {
        const decodedToken = jwtDecode(token)
        if (decodedToken.exp * 1000 < Date.now()) {
            store.dispatch(logoutUser())
        } else {
            axios.defaults.headers['Authorization'] = token
            store.dispatch(fetchAllEntries())
            store.dispatch(getPrimaryFeelings())
        }
    }
})

export default store
export { persistore }

