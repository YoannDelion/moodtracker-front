import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entries: [],
    currentEntry: {}
}

const entriesSlice = createSlice({
    name: 'entries',
    initialState,
    reducers: {
        addNewEntry: (state, action) => {
            state.entries.push(action.payload)
            state.currentEntry = action.payload
        },
        fetchedAllEntries: (state, action) => { state.entries = action.payload },
        emptyEntries: state => initialState,
        selectCurrentEntry: (state, action) => { state.currentEntry = action.payload }
    }
})

export const { addNewEntry, fetchedAllEntries, emptyEntries, selectCurrentEntry } = entriesSlice.actions

export default entriesSlice.reducer