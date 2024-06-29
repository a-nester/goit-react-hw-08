import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, {payload}) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
  }
});

export const authReducer = authSlice.reducer;
