// Configuración redux
import { configureStore } from "@reduxjs/toolkit";

// Importar archivo con el reducer
import AuthReducer from "./actions/authSlice";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
