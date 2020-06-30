import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    entries: [],
    currentEntry: {},
    selectedMonth: new Date()
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
        selectCurrentEntry: (state, action) => { state.currentEntry = action.payload },
        deleteCurrentEntryFromStore: state => {
            state.entries = state.entries.filter(entry => entry.entryId !== state.currentEntry.entryId)
        },
        selectMonth: (state, action) => { state.selectedMonth = action.payload }
    }
})

export const { addNewEntry, fetchedAllEntries, emptyEntries, selectCurrentEntry, updateEntry, deleteCurrentEntryFromStore, selectMonth } = entriesSlice.actions

export default entriesSlice.reducer 