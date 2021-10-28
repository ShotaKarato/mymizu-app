import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterLoc } from "../slices/locationSlice";

const Filter = () => {
	const dispatch = useDispatch();
	const filterChoice = useSelector((state) => state.allLocations.filter);

	const filter = (e) => {
		dispatch(filterLoc(e.target.value));
	};

	return (
		<div className="selectFilter">
			<select defaultValue={filterChoice} onChange={filter}>
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
