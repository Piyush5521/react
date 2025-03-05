import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
    name:'auth',

    initialState: {
        isAuthenticated: false,
        user: null,
    },

    reducers: {
        login:(state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },

        logout:(state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
})

export const {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer