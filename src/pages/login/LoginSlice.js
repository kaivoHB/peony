import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: '',
    loginSuccess: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        saveToken: (state, action) => {
            state.token = action.payload;
            state.loginSuccess = true;
        }
    },
});

export const { saveToken } = loginSlice.actions;

export const selectToken = (state) => state.login.token;
export const selectLoginSuccess = (state) => state.login.loginSuccess;

export default loginSlice.reducer