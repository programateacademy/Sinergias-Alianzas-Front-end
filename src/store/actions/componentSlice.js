import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

//Add new component
export const addComponent = createAsyncThunk(
  "component/addComponent",
  async ({ updateComponentData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.addComponent(updateComponentData);
      toast.success("Componente creado satisfactoriamente");
      navigate("/home");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//
export const getComponents = createAsyncThunk(
  "component/getComponents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getComponents();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const componentSlice = createSlice({
  name: "componentes",
  initialState: {
    componente: {},
    componentes: [],
    error: "",
    loading: false,
  },

  extraReducers: {
    [addComponent.pending]: (state, action) => {
      state.loading = true;
    },
    [addComponent.fulfilled]: (state, action) => {
      state.loading = false;
      state.componentes = [action.payload];
    },
    [addComponent.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getComponents.pending]: (state, action) => {
      state.loading = true;
    },
    [getComponents.fulfilled]: (state, action) => {
      state.loading = false;
      state.componentes = action.payload;
    },
    [getComponents.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default componentSlice.reducer;
