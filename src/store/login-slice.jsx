import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "login",
    initialState: { isLoggedIn: false },
    reducers: {
        logIn(state) {
            state.isLoggedIn = true
        },
        logOut(state) {
            state.isLoggedIn = false
        },
    },
})
export const loginActions = loginSlice.actions

export default loginSlice