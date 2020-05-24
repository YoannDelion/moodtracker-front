import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogged: false,
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogged = true
            state.token = action.payload
        },
        logout: state => initialState
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer