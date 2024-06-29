import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunk) => {
    try {
      const response = await axios("/contacts");
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (item, thunk) => {
    try {
      const response = await axios.post("/contacts", item);
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunk) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);
