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
        selectMonth: (state, action) => { state.selectedMonth = action.payload },
        addNote: (state, action) => {
            const entryIndex = state.entries.findIndex(entry => entry.entryId === action.payload.entryId)
            state.entries[entryIndex] = { ...state.entries[entryIndex], note: action.payload.note }
            state.currentEntry = state.entries[entryIndex]
        }
    }
})

export const {
    addNewEntry, fetchedAllEntries, emptyEntries, selectCurrentEntry, updateEntry,
    deleteCurrentEntryFromStore, selectMonth, addNote
} = entriesSlice.actions

export default entriesSlice.reducer 