import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    primaryFeelings: []
}

const feelingsSlice = createSlice({
    name: 'feelings',
    initialState,
    reducers: {
        fetchedPrimaryFeelings: (state, action) => { state.primaryFeelings = action.payload }
    }
})

export const { fetchedPrimaryFeelings } = feelingsSlice.actions

export default feelingsSlice.reducer