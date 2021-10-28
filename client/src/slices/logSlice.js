import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLogsNumber = createAsyncThunk(
  "logs/fetchLogsNumber",
  async () => {
    const response = await axios.get("/logs", {
      headers: JSON.parse(localStorage.getItem("mymizu")),
    });
    return response.data;
  }
);

let initialState = [];

const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchLogsNumber.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default logSlice.reducer;
