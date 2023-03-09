// dependencies
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify"; // Notificaciones en pantalla
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Manejo de rutas
import { useDispatch } from "react-redux";

// Redux functions
import { getLoginStatus } from "./store/actions/auth/authSlice";

// Components
import Layout from "./components/Layout/Layout";
import Verify from "./pages/Verify/Verify";

// pages
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import LoginWithCode from "./pages/Login/LoginWithCode";
import Profile from "./pages/Profile/Profile";
import HomeU from "./pages/HomeU/HomeU";
import ForoA from "./pages/ForoA/ForoA";
import ForoU from "./pages/ForoU/ForoU";
import Header from "./components/HeaderU/HeaderU";

//Page components
import AddComponent from "./components/AddComponent/AddComponent";
import EditComponent from "./components/EditComponent/EditComponent";
import SeeComponent from "./components/seeComponent/SeeComponent";

// styles
import "react-toastify/dist/ReactToastify.css";

// credentials
import axios from "axios";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
axios.defaults.withCredentials = true;

function App() {
  /* 
  - =================================
  -    COMPONENT FUNCTIONS
  - =================================
  */
  //* Hooks Redux
  const dispatch = useDispatch();

  //* Determine if the user logged in or not
  useEffect(() => {
    dispatch(getLoginStatus());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* notifications */}
      <ToastContainer />

      <Routes>
        {/* 
            - =================================
            -       USERS MODULE ROUTES
            - =================================
          */}
        <Route path="/" element={<Login />} />

        <Route
          path="/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        <Route
          path="/changePassword"
          element={
            <Layout>
              <ChangePassword />
            </Layout>
          }
        />

        <Route path="/resetPassword/:resetToken" element={<ResetPassword />} />

        <Route path="/loginWithCode/:email" element={<LoginWithCode />} />

        <Route
          path="/verify/:verificationToken"
          element={
            <Layout>
              <Verify />
            </Layout>
          }
        />

        {/* 
            - =================================
            -     ROUTES MODULE COMPONENTS
            - =================================
          */}

        <Route
          path="/test"
          element={
            <Layout>
              <Header/>
            </Layout>
          }
        />

        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/homeu"
          element={
            <Layout>
              <HomeU />
            </Layout>
          }
        />

        <Route
          path="/foroa"
          element={
            <Layout>
              <ForoA />
            </Layout>
          }
        />

        <Route
          path="/forou"
          element={
            <Layout>
              <ForoU />
            </Layout>
          }
        />

        <Route
          path="/addComponent"
          element={
            <Layout>
              <AddComponent />
            </Layout>
          }
        />

        <Route
          path="/updateComponent/:id"
          element={
            <Layout>
              <EditComponent />
            </Layout>
          }
        />

        <Route
          path="/seeComponent/:id"
          element={
            <Layout>
              <SeeComponent />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
