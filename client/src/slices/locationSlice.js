import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	filter: "",
	user_lat: "",
	user_long: "",
	default: [],
	locations: [],
	pending: false,
};

export const nearLocationsAction = createAsyncThunk(
	"location/nearLocationsAction",
	async ({ lat, long }) => {
		const request = await axios.get(`/locations?lat=${lat}&long=${long}`);
		console.log(request.data);
		return {
			default: request.data.taps,
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
		setLngLat: (state, action) => {
			return {
				...state,
				...action.payload,
			};
		},

		filterLoc: (state, action) => {
			console.log(action.payload);
			if (action.payload === "") {
				state.locations = state.default;
			} else {
				state.locations = state.default.filter(
					(loc) => loc.category_id === Number(action.payload)
				);
			}
			state.filter = action.payload;
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

export const { filterLoc, setLngLat } = locationSlice.actions;
export default locationSlice.reducer;
