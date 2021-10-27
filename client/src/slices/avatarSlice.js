import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAvatar = createAsyncThunk(
  "avatar/fetchAvatar",
  async (data) => {
    try {
      let response = await axios.get(`/avatar/${data}`);
      return response.data[0];
    } catch (error) {
      console.error(error);
    }
  }
);

let initialState = {};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAvatar.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default avatarSlice.reducer;
