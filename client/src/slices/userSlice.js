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

export const verify = createAsyncThunk("user/verify", async () => {
	try {
		const request = await axios.get("/auth", {
			headers: JSON.parse(localStorage.getItem("mymizu")),
		});
		return request.data;
	} catch (err) {
		console.log(err);
		return { err: err.response.data };
	}
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		userLogout: (state) => {
			state.auth = false;
			localStorage.removeItem("mymizu");
		},
	},
	extraReducers: {
		[userLogin.fulfilled]: (state, action) => {
			if ("err" in action.payload) {
				state.auth = false;
			} else {
				state.auth = true;
			}
		},
		[userSignUp.fulfilled]: (state, action) => {
			if ("err" in action.payload) {
				state.auth = false;
			} else {
				state.auth = true;
			}
		},
		[verify.fulfilled]: (state, action) => {
			if (action.payload === true) {
				state.auth = true;
			} else {
				state.auth = false;
			}
		},
	},
});
export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
