import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
  auth: null,
  pending: false
};

export const userLogin = createAsyncThunk(
    "user/userLogin",
    async(loginInput) => {
        try {
            const request = await axios.post('/auth/sign-in', loginInput);
            console.log(request.data)
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
)

export const userSignUp = createAsyncThunk(
    "user/userSignUp",
    async(signUpInput) => {
        try {
            const request = await axios.post('/auth/sign-up', signUpInput);
            console.log(request.data)
        }
        catch (err) {
            console.log(err.response.data);
        }
    }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
  },
});

export default userSlice.reducer;
