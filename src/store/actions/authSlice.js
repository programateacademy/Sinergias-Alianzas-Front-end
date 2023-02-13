import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as api from "../api";

// Función para iniciar sesión
export const login = createAsyncThunk(
  "auth/login",
  async ({ formData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signIn(formData);

      toast.success("Ingreso correcto");

      navigate("/home");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },

  reducers: {
    // Persistencia del usuario que inicia sesión
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },

    [login.fulfilled]: (state, action) => {
      state.loading = false;

      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));

      state.user = action.payload;
    },
  },
});

export const {setUser} = authSlice.actions

export default authSlice.reducer