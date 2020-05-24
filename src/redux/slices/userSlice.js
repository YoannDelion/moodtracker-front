import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchedUserInfo: (state, action) => {state = action.payload}
    }
})

export const { fetchedUserInfo } = userSlice.actions

export default userSlice.reducer