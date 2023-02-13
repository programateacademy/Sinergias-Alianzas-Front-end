// Axios para consumir para la API
import axios from 'axios'

// Crear la URL de la api
const API = axios.create({baseURL: "http://localhost:5000"}) // local

// Petición para iniciar sesión
export const signIn = (formData) => API.post("/users/signin", formData);