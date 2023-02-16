// Configuración redux
import { configureStore } from "@reduxjs/toolkit";

// Importar archivo con el reducer
import authReducer from "./actions/auth/authSlice";
import ComponentReducer from "./actions/componentSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    componentes: ComponentReducer,
  },
});
