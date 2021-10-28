import React from "react";
import { useDispatch } from "react-redux";
import { filterLoc } from "../slices/locationSlice";

const Filter = () => {
	const dispatch = useDispatch();

	const filter = (e) => {
		dispatch(filterLoc(e.target.value));
	};

	return (
		<div className="selectFilter">
			<select defaultValue="" onChange={filter}>
				<option value="">---All---</option>
				<option value="1">Natural Springs</option>
				<option value="2">Public, Limited Access</option>
				<option value="3">OpenStreetMaps</option>
				<option value="4">Private Business</option>
				<option value="5">Needs Verification</option>
			</select>
		</div>
	);
};

export default Filter;
