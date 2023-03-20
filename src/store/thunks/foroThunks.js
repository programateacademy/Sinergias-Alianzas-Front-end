import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as foroSlice from "../services/servicesForo";

//get component info
export const getForo = createAsyncThunk(
    "foro/getForo",
    async (id, { rejectWithValue }) => {
      try {
        const response = await foroSlice.getForo(id);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message.data);
      }
    }
  );