import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as answerSlice from "../services/servicesAnswers";
import { getQuestions } from "../thunks/foroThunks"

  //Add new answer in the question
  export const addAnswer= createAsyncThunk(
    "foro/addAnswer",
    async ({ id , answersData, toast }, { rejectWithValue }) => {
      try {
        await answerSlice.addAnswer(answersData);
        toast.success("Respuesta creada satisfactoriamente");
        getQuestions(id);
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

//Update the answer info
export const updateAnswer = createAsyncThunk(
    "foro/updateAnswer",
    async (
      { updateAnswersData, toast},
      { rejectWithValue }
    ) => {
      try {
        const response = await answerSlice.updateAnswer(updateAnswersData);
        toast.success("Respuesta editada satisfactoriamente");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

// Delete answer 
export const deleteAnswer = createAsyncThunk(
    "foro/deleteAnswer",
    async (
      { id, toast},
      { rejectWithValue }
    ) => {
      try {
        const response = await answerSlice.deleteAnswer(id);
        toast.success("Respuesta Eliminada satisfactoriamente");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
); 

//edit answer Foro info likes
export const updateLikeAnswer = createAsyncThunk(
    "foro/updateLikeAnswer",
    async (
      { updateLikeAnswerData, toast},
      { rejectWithValue }
    ) => {
      try {
        const response = await answerSlice.updateLikeAnswer(updateLikeAnswerData);
        toast.success("Respuesta editada satisfactoriamente");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  

//edit answer Foro info likes
export const updateReportAnswer = createAsyncThunk(
    "foro/updateReportAnswer",
    async (
      { updateReportAnswerData, toast},
      { rejectWithValue }
    ) => {
      try {
        const response = await answerSlice.updateReportAnswer(updateReportAnswerData);
        toast.success("Pregunta editada satisfactoriamente");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  ); 