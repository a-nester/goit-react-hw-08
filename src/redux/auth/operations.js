import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global/';
const setHeaderAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const clearHeaderAuthToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};

export const register = createAsyncThunk(
  'auth/register',
  async (userRegData, thunkAPI) => {
    try {
      const response = await axios.post('users/signup', userRegData);
      setHeaderAuthToken(response.data.token);
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
      setHeaderAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { thunkAPI }) => {
    try {
      await axios.post('users/logout');
      clearHeaderAuthToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { thunkAPI, getState }) => {
    try {
      const state = getState();
      setHeaderAuthToken(state.auth.token);
      const response = await axios('users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    conditions: (_, { getState }) => {
      const state = getState();
      if (!state.auth.token) {
        return false;
      }
    },
  }
);
