// Configuración redux
import { configureStore } from "@reduxjs/toolkit";

// Importar archivo con el reducer
import AuthReducer from "./actions/authSlice";
import ComponentReducer from './actions/componentSlice'

export default configureStore({
  reducer: {
    auth: AuthReducer,
    componentes : ComponentReducer,
  },
});
