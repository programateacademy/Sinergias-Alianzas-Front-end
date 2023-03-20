// Axios to consume for the API
import axios from "axios";

// Create the api url
const API = axios.create({ baseURL: "http://localhost:5000" }); // local

//Request to get the component info
export const getForo = (id) => API.get(`/foroRoute/${id}`);

// //Request to get the components
// export const getComponents = () => API.get("/component");

// // Request to enter all component information
// export const addComponent = (componentData) =>
//   API.post("/component/new", componentData);

// //Request to update the component info
// export const updateComponent = (updatedComponentData, id) =>
//   API.patch(`/component/${id}`, updatedComponentData);

// //Request to change the visibility of the component
// export const deleteComponent = (id) => API.put(`/component/delete/${id}`);
