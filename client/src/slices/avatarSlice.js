import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAvatar = createAsyncThunk("avatar/fetchAvatar", async () => {
  try {
    let response = await axios.get(`/avatar`, {
      headers: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoyL…yNDV9.E0xZ6aezLygpzZmsMpyiYr6O0cBm74PTKYRJRUMtxCM",
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
