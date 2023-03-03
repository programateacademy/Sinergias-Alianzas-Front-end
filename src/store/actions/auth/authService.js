// API
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/users/`;

//* validate email+
export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

/*
- =================================
-         register user
- =================================
*/
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData);

  return response.data;
};

/*
- =================================
-         Log in
- =================================
*/
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  return response.data;
};

/*
- =================================
-         Sign off
- =================================
*/
const logout = async () => {
  const response = await axios.get(API_URL + "logout");

  return response.data.message;
};

/*
- =================================
-   Login Status
- =================================
*/
const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "loginStatus");

  return response.data;
};

/*
- =================================
-       user profile
- =================================
*/
const getUser = async () => {
  const response = await axios.get(API_URL + "getUser");

  return response.data;
};

/*
- =================================
-   Send verification email
- =================================
*/
const sendVerificationEmail = async () => {
  const response = await axios.post(API_URL + "sendVerificationEmail");

  return response.data.message;
};

/*
- =================================
-   Verificar usuario
- =================================
*/
const verifyUser = async (verificationToken) => {
  const response = await axios.patch(
    `${API_URL}verifyUser/${verificationToken}`
  );

  return response.data.message;
};

/*
- =================================
-       Cambiar Contraseña
- =================================
*/
const changePassword = async (userData) => {
  const response = await axios.patch(API_URL + "changePassword", userData);

  return response.data.message;
};

/*
- =================================
-       listar usuarios
- =================================
*/
const getUsers = async (userData) => {
  const response = await axios.get(API_URL + "getUsers", userData);

  return response.data;
};

const authService = {
  register,
  login,
  logout,
  getLoginStatus,
  getUser,
  sendVerificationEmail,
  verifyUser,
  changePassword,
  getUsers
};

export default authService;

