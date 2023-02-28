// Axios para consumir para la API
import axios from 'axios'

// Crear la URL de la api
const API = axios.create({baseURL: "http://localhost:5000"}) // local

// Petición para iniciar sesión
export const signIn = (formData) => API.post("/users/signin", formData);

// Petición para ingresar toda la información del componente
export const addComponent = (componentData) => API.post('/component/new', componentData);

//Request to get the components
export const getComponents = () => API.get('/component');

//Request to get the component info
export const getComponent = (id) => API.get(`/component/seeComponent/${id}`);

//Request to update the component info
export const updateComponent = (updatedComponentData, id) =>
  API.patch(`/component/${id}`, updatedComponentData);

//Request to change the visibility of the component
export const deleteComponent =(id) => API.put(`/component/delete/${id}`);