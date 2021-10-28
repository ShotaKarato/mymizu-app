import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/locationSlice";
import avatarReducer from "./slices/avatarSlice";
import userReducer from "./slices/userSlice";
import logReducer from "./slices/logSlice";

export default configureStore({
  reducer: {
    allLocations: locationReducer,
    avatar: avatarReducer,
    user: userReducer,
    log: logReducer,
  },
});
