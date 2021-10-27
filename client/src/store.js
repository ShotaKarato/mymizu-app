import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";
import avatarReducer from "./slices/avatarSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    allLocations: locationReducer,
    avatar: avatarReducer,
    user: userReducer
  },
});
