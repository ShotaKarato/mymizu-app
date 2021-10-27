import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";
import avatarReducer from "./slices/avatarSlice";

export default configureStore({
  reducer: {
    allLocations: locationReducer,
    avatar: avatarReducer,
  },
});
