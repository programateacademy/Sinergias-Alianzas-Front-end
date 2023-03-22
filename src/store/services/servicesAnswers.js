// Axios to consume for the API
import axios from "axios";

// Create the api url
const API = axios.create({ baseURL: "http://localhost:5000" }); // local

// Request to add new answer in the question
export const addAnswer = (answersData) => 
    API.post("/answerRoute/", answersData);

//Request to update the answer info
export const updateAnswer = (updateAnswersData) =>
    API.patch("/answerRoute/", updateAnswersData);

//Request to change the visibility of the answer
export const deleteAnswer = (id) => 
    API.put("/answerRoute/", id);

//Request to update the answer like
export const updateLikeAnswer = (updateLikeAnswerData) =>
API.patch("/answerRoute/updateNumberLike", updateLikeAnswerData);

//Request to update the answer like
export const updateReportAnswer = (updateReportAnswerData) =>
API.patch("/answerRoute/updateReport", updateReportAnswerData);
