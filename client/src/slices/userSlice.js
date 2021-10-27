import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
	auth: null,
	pending: false,
};

export const userLogin = createAsyncThunk(
	"user/userLogin",
	async (loginInput) => {
		try {
			const request = await axios.post("/auth/sign-in", loginInput);
			localStorage.setItem(
				"mymizu",
				JSON.stringify({ token: request.data.token })
			);
			return request.data;
		} catch (err) {
			return { err: err.response.data };
		}
	}
);

export const userSignUp = createAsyncThunk(
	"user/userSignUp",
	async (signUpInput) => {
		try {
			const request = await axios.post("/auth/sign-up", signUpInput);
			localStorage.setItem(
				"mymizu",
				JSON.stringify({ token: request.data.token })
			);
			return request.data;
		} catch (err) {
			return { err: err.response.data };
		}
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: {
		[userLogin.fulfilled]: (state, action) => {
			if ("err" in action) {
				state.auth = false;
			} else {
				state.auth = true;
			}
		},
		[userSignUp.fulfilled]: (state, action) => {
			if ("err" in action) {
				state.auth = false;
			} else {
				state.auth = true;
			}
		},
	},
});

export default userSlice.reducer;
