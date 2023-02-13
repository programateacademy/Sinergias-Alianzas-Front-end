// Dependencias
import React from "react";
import ReactDOM from "react-dom/client";

// Provider Redux
import { Provider } from "react-redux";

// Store
import store from "./store/store";

// Componentes
import App from "./App";

// Estilos
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
