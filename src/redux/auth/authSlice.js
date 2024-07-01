import { createSlice } from '@reduxjs/toolkit';
import { logOut, login, register, current } from './operations';

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
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = payload;
        // state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(current.rejected, state => {
        state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;
