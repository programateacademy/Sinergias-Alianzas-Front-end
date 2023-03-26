import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as answerSlice from "../services/servicesAnswers";
import { getQuestions } from "../thunks/foroThunks"

  //Add new answer in the question
  export const addAnswer = createAsyncThunk(
    "foro/addAnswer",
    async ({ id, answerData, toast }, { rejectWithValue }) => {
      try {
        await answerSlice.addAnswer(answerData);
        toast.success("Respuesta creada satisfactoriamente");
        return getQuestions(id);
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

//Update the answer info
export const updateAnswer = createAsyncThunk(
    "foro/updateAnswer",
    async (
      { id, updateAnswersData, toast},
      { rejectWithValue }
    ) => {
      try {
         await answerSlice.updateAnswer(updateAnswersData);
        toast.success("Respuesta editada satisfactoriamente");
        return getQuestions(id);
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

// Delete answer 
export const deleteAnswer = createAsyncThunk(
    "foro/deleteAnswer",
    async (
      { id, idDelete, toast},
      { rejectWithValue }
    ) => {
      try {
        await answerSlice.deleteAnswer(idDelete);
        toast.success("Respuesta Eliminada satisfactoriamente");
        return getQuestions(id);
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
); 

//edit answer Foro info likes
export const updateLikeAnswer = createAsyncThunk(
    "foro/updateLikeAnswer",
    async (
      { id, updateLikeAnswerData, toast},
      { rejectWithValue }
    ) => {
      try {
        await answerSlice.updateLikeAnswer(updateLikeAnswerData);
        toast.success("Respuesta editada satisfactoriamente");
        return getQuestions(id);
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  

//edit answer Foro info likes
export const updateReportAnswer = createAsyncThunk(
    "foro/updateReportAnswer",
    async (
      { id, updateReportAnswerData, toast},
      { rejectWithValue }
    ) => {
      try {
        await answerSlice.updateReportAnswer(updateReportAnswerData);
        toast.success("Pregunta editada satisfactoriamente");
        return getQuestions(id);
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  ); 