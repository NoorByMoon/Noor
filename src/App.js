import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Auth/login';
import ForgetPassword from "./Auth/forgetPassword";
import ResetPassword from './Auth/resetPassword';
import RegistrationForm from "./Auth/RegistrationForm";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Forget-Password" element={<ForgetPassword />} />
        <Route path="/Reset-Password" element={<ResetPassword />} />
        <Route path="/sign-up" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
