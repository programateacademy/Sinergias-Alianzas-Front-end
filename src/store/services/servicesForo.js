// Axios to consume for the API
import axios from "axios";

// Create the api url
const API = axios.create({ baseURL: "http://localhost:5000" }); // local

//Request to get the question Foro info
export const getQuestions = (id) => 
    API.get(`/foroRoute/${id}`);

//Request to get the question and answers report
export const getQuestionReport = () => 
    API.get("/");

// Request to add new question information
export const addQuestion = (questionData, id) => 
    API.post(`/foroRoute/${id}`, questionData);

//Request to update the question info
export const updateQuestion = (updateQuestionData) =>
    API.patch("/foroRoute/", updateQuestionData);

//Request to change the visibility of the question
export const deleteQuestion = (id) => 
    API.put("/foroRoute/", id);
 
//Request to update the question likes
export const updateLikeQuestion = (updateLikeQuestionData) =>
    API.patch("/foroRoute/updateNumberLike", updateLikeQuestionData);

//Request to update the question likes
export const updateReportQuestion = (updateReportQuestionData) =>
    API.patch("/foroRoute/updateReport", updateReportQuestionData);