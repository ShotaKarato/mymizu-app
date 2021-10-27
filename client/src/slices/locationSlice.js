import {
	createAsyncThunk,
	createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	user_lat: "",
	user_long: "",
	locations: [],
	pending: false,
};

export const nearLocationsAction = createAsyncThunk(
	"location/nearLocationsAction",
	async ({ lat, long }) => {
		const request = await axios.get(
			`/locations?lat=${lat}&long=${long}`
		);
		console.log(lat, long);
		return {
			locations: request.data.taps,
			user_long: long,
			user_lat: lat,
		};
	}
);
export const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		add: (state, action) => {
			state.locations.push(action.payload);
		},
	},
	extraReducers: {
		[nearLocationsAction.pending]: (state) => {
			state.pending = true;
		},
		[nearLocationsAction.fulfilled]: (state, action) => {
			return {
				...state,
				...action.payload,
				pending: false,
			};
		},
	},
});

export default locationSlice.reducer;
