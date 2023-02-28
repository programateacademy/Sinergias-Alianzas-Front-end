// redux configuration
import { configureStore } from "@reduxjs/toolkit";

// Import file with reducer
import authReducer from "./actions/auth/authSlice";
import ComponentReducer from "./actions/componentSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    componente: ComponentReducer,
  },
});
