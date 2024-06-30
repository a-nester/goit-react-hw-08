import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';
const setHeaderAuthToken = (token) => {
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const register = createAsyncThunk(
  'auth/register',
  async (userRegData, thunkAPI) => {
    try {
        const response = await axios.post('users/signup', userRegData);
        setHeaderAuthToken(response.data.token)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userLogData, thunkAPI) => {
    try {
        const response = await axios.post('users/login', userLogData);
        setHeaderAuthToken(response.data.token)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
