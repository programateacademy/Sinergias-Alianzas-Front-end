import { createSlice } from "@reduxjs/toolkit";
import { getForo } from "../thunks/foroThunks"

const foroSlice = createSlice({
    name: "foro",
    initialState: {
      foro: [],
      foroReport: [],
      error: "",
      loading: false,
    },
    extraReducers: {
        [getForo.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = action.payload;
        }
    }
})


export default foroSlice.reducer;