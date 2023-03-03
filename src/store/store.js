// redux configuration
import { configureStore } from "@reduxjs/toolkit";

// Import file with reducer
import authReducer from "./actions/auth/authSlice";
import ComponentReducer from "./actions/componentSlice";
import usersReducer from "./actions/auth/usersSlice";


export default configureStore({
  reducer: {
    auth: authReducer,
    componente: ComponentReducer,
    usuario:usersReducer   
  },
});
