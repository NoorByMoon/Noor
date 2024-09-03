import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import ForgetPassword from "./Auth/ForgetPassword";
import RegistrationForm from "./Auth/RegistrationForm";
import ResetPassword from "./Auth/ResetPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import LandingPage from "./pages/LandingPage/LandingPage";


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Sign-In" element={<Login />} />
        <Route path="/Forget-Password" element={<ForgetPassword />} />
        <Route path="/Reset-Password" element={<ResetPassword />} />
        <Route path="/Sign-Up" element={<RegistrationForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
