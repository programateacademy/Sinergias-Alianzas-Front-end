import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addComponent = createAsyncThunk(
    "component/new",
    async ({ updateComponent, navigate, toast }, { rejectWithValue }) => {
      try {
        const response = await api.addComponent(updateComponent);
        toast.success("Componente creado satisfactoriamente");
        navigate("/home");
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
        }
    }});

    export default componentSlice.reducer;