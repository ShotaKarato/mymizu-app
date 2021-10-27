import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAvatar = createAsyncThunk("avatar/fetchAvatar", async () => {
  try {
    let response = await axios.get(`/avatar`, {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoyLCJpYXQiOjE2MzUzMzE5NTF9.yYE7k-6wf3m2YmQq9I6FM-UtbX3mDlZO_LDFLqm_fY8",
      },
    });

    return response.data[0];
  } catch (error) {
    console.error(error);
  }
});

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
