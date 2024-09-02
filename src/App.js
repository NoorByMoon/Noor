import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login";
import ForgetPassword from "./Auth/forgetPassword";
import ResetPassword from "./Auth/ResetPassword";
import RegistrationForm from "./Auth/RegistrationForm";
import LandingPage from "./LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./Components/Shared/Footer";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sign-In" element={<Login />} />
        <Route path="/Forget-Password" element={<ForgetPassword />} />
        <Route path="/Reset-Password" element={<ResetPassword />} />
        <Route path="/Sign-Up" element={<RegistrationForm />} />
        <Route path="/Landing-page" element={<LandingPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
