import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 2,
  user_id: 1,
  level: 0,
  date: "2021-10-26 18:46:05.279472+09",
};

export const avatarSlice = createSlice({
  name: "avatar",
  initialState,
  reducers: {},
});

export default avatarSlice.reducer;
