import {  createAsyncThunk } from "@reduxjs/toolkit";
import * as foroSlice from "../services/servicesForo";

//get question foro info
export const getQuestions = createAsyncThunk(
    "foro/getForo",
    async (id, { rejectWithValue }) => {
      try {
        const response = await foroSlice.getQuestions(id);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.message.data);
      }
    }
  );

  //get question report foro info
export const getQuestionReport = createAsyncThunk(
    "foro/getQuestionReport",
    async (_, { rejectWithValue }) => {
      try {
        const response = await foroSlice.getQuestionReport();
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  //Add new question
export const addQuestion= createAsyncThunk(
    "foro/addQuestion",
    async ({ updateQuestionData, id, toast }, { rejectWithValue }) => {
      try {
        const response = await foroSlice.addQuestion(updateQuestionData, id);
        toast.success("Pregunta creada satisfactoriamente");
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  //edit Question Foro info
export const updateQuestion = createAsyncThunk(
    "foro/updateQuestion",
    async (
      { updateQuestionData, toast},
      { rejectWithValue }
    ) => {
      try {
        const response = await foroSlice.updateQuestion(updateQuestionData);
        toast.success("Pregunta editada satisfactoriamente");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  // Delete Question 
  export const deleteQuestion = createAsyncThunk(
    "foro/deleteQuestion",
    async (
      { id, toast},
      { rejectWithValue }
    ) => {
      try {
        const response = await foroSlice.deleteQuestion(id);
        toast.success("Pregunta Eliminada satisfactoriamente");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


//edit Question Foro info likes
export const updateLikeQuestion = createAsyncThunk(
    "foro/updateLikeQuestion",
    async (
      { updateLikeQuestionData, toast},
      { rejectWithValue }
    ) => {
      try {
        const response = await foroSlice.updateLikeQuestion(updateLikeQuestionData);
        toast.success("Pregunta editada satisfactoriamente");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );
  

//edit Question Foro info likes
export const updateReportQuestion = createAsyncThunk(
    "foro/updateReportQuestion",
    async (
      { updateReportQuestionData, toast},
      { rejectWithValue }
    ) => {
      try {
        const response = await foroSlice.updateReportQuestion(updateReportQuestionData);
        toast.success("Pregunta editada satisfactoriamente");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );


  