// dependencies
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify"; // screen notifications 
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Route management
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
import ButtonsUsers from "./pages/Users/ButtonsUsers";
import HomeUser from "./pages/HomeUser/HomeUser";
import ForoA from "./pages/ForoA/ForoA";
import ForoU from "./pages/ForoU/ForoU";
import HeaderU from "./components/HeaderDos/HeaderDos";


//Page components
import AddComponent from "./components/AddComponent/AddComponent";
import EditComponent from "./components/EditComponent/EditComponent";
import SeeComponent from "./components/seeComponent/SeeComponent";
import SeeForo from "./components/seeForo/seeForo";

import SeeComponentUser from "./components/seeComponentUser/SeeComponentUser";

// styles
import "react-toastify/dist/ReactToastify.css";

// credentials
import axios from "axios";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
axios.defaults.withCredentials = true;

function App() {
  // UseState para cambiar el header dependiendo si es admin o userNoregistrado
  const [isAdminOrUser, setIsAdminOrUse] = useState(true)
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

        <Route
          path="/buttonsUsers"
          element={
            <Layout>
              <ButtonsUsers />
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
              <HeaderU/>
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
          path="/homeUser"
          element={
            <Layout isAdminOrUser={isAdminOrUser} setIsAdminOrUse={setIsAdminOrUse}>
              <HomeUser isAdminOrUser={isAdminOrUser} setIsAdminOrUse={setIsAdminOrUse}/>
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
        <Route
          path="/seeComponentUser/:id"
          element={
            <Layout>
              <SeeComponentUser />
            </Layout>
          }
        />
        <Route
          path="/seeforo/:id"
          element={
            <Layout>
              <SeeForo/>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
