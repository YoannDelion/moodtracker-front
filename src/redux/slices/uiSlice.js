import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        loadingUi: state => { state.isLoading = true },
        stopLoadingUi: state => { state.isLoading = false }
    }
})

export const { loadingUi, stopLoadingUi } = uiSlice.actions

export default uiSlice.reducer