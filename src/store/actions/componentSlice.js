import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import axios from "axios";

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

//components list
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

//get component info
export const getComponent = createAsyncThunk(
  "component/getComponent",
  async (id,{rejectWithValue}) => {
    try{
      const response = await api.getComponent(id);
      return response.data;
    }catch(error){
      return rejectWithValue(error.message.data);
    }
  }
);



export const updateComponent = (id, data) => async (dispatch) => {
  try {
    // Acceso a la ruta de la API que ejecuta la función de actualizar la tarea
    const res = await api.updateComponent(id);
     return response.data
    // Se referencia el tipo de acción y los datos que recibe
    dispatch({ type: updateComponent, payload: res.data });
  } catch (error) {
    // Se captura el error en caso de que no se pueda actualizar la tarea
    console.log("Error al editar el componente", error.message);
  }
};

//! Working delete
export const deleteComponent = (id, data) => async (dispatch) => {
  try {
    const res = await api.deleteComponent(id);
     return response.data    
    dispatch({ type: deleteComponent, payload: res.data });
  } catch (error) {    
    console.log("Error al eliminar el componente", error.message);
  }
};








const componentSlice = createSlice({
  name: "componente",
  
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
    [getComponent.pending]: (state, action) => {
      state.loading = true;
    },
    [getComponent.fulfilled]: (state, action) => {
      state.loading = false;
      state.componente = action.payload;
    },
    [getComponent.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateComponent.pending]: (state, action) => {
  state.loading = true;
},
[updateComponent.fulfilled]: (state, action) => {
  state.loading = false;
  console.log("action", action)
  const {
    arg: {id},
  } = action.meta

  if(id) {
    state.componentes = state.componentes.map((item) => item._id === id ? action.payload : item)
  }
},
[updateComponent.rejected]: (state, action) => {
  state.loading = false;
  state.error = action.payload.message;
},
  },
});



export default componentSlice.reducer;
