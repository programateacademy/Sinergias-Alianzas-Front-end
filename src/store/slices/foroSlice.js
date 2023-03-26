import { createSlice } from "@reduxjs/toolkit";
import { addAnswer, deleteAnswer, updateAnswer, updateLikeAnswer, updateReportAnswer } from "../thunks/answerThunk";
import { getQuestions,
         getQuestionReport, 
         addQuestion, 
         updateQuestion,  
         deleteQuestion, 
         updateLikeQuestion, 
         updateReportQuestion } from "../thunks/foroThunks"

const foroSlice = createSlice({
    name: "foro",
    initialState: {
      foro: [],
      foroReport: [],
      error: "",
      loading: false,
    },
    extraReducers: {
        [getQuestions.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = action.payload;
        },
        [getQuestionReport.fulfilled]: (state, action) => {
            state.loading = false;
            state.foroReport = action.payload;
        },
        [addQuestion.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [updateQuestion.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [deleteQuestion.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [updateLikeQuestion.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [updateReportQuestion.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [addAnswer.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [updateAnswer.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [deleteAnswer.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [updateLikeAnswer.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
        [updateReportAnswer.fulfilled]: (state, action) => {
            state.loading = false;
            state.foro = [action.payload];
        },
    }
});


export default foroSlice.reducer;