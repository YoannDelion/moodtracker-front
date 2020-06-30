import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isModalOpen: true
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        loadingUi: state => { state.isLoading = true },
        stopLoadingUi: state => { state.isLoading = false },
        toggleModal: (state, action) => { state.isModalOpen = action.payload }
    }
})

export const { loadingUi, stopLoadingUi, toggleModal } = uiSlice.actions

export default uiSlice.reducer