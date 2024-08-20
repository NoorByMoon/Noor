import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Auth/Login';
import ForgetPassword from "./Auth/forgetPassword";
import ResetPassword from './Auth/ResetPassword';
import RegistrationForm from "./Auth/RegistrationForm";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/Sign-In" element={<Login />} />
        <Route path="/Forget-Password" element={<ForgetPassword />} />
        <Route path="/Reset-Password" element={<ResetPassword />} />
        <Route path="/Sign-Up" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
