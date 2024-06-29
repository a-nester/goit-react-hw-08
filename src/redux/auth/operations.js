import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/'

export const register = createAsyncThunk("auth/register",
    async (userRegData, thunkAPI) => {
        try {
            const { response } = await axios.post('users/signup', userRegData)
            console.log(response.data);
            return response.data
        } catch (error) { 
            return thunkAPI.rejectWithValue(error.message)
        }
    })