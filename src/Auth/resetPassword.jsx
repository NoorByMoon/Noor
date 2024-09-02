import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from '../Components/Shared/PasswordInput'
import logo from "../assets/logo (2).png";
import auth from "../assets/auth.svg";

// Modal Component
const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Success!</h2>
        <p>Your password has been successfully reset.</p>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validatePassword = (newPassword) => {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    return (
      newPassword.length >= minLength &&
      hasNumber.test(newPassword) &&
      hasSpecialChar.test(newPassword)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    if (oldPassword === newPassword) {
      setError("New password cannot be the same as the old password.");
      return;
    }

    if (!validatePassword(newPassword)) {
      setError(
        "New password must be at least 8 characters long, contain at least one number, and one special character."
      );
      return;
    }

    // Simulate successful password change
    setSuccess(true);
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const closeModal = () => {
    setSuccess(false);
    // Optionally, navigate to another page after closing the modal
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-300 ">
      <div className="bg-white p-2 sm:p-5 rounded shadow-md w-full max-w-4xl  flex flex-col sm:flex-row">
        <div className="sm:w-1/2 p-2 flex flex-col items-start  ">
          <Link to='/' >
            <img
              src={logo}
              alt="Logo"
              className="h-8 self-start mb-4 max-w-xs sm:max-w-full"
            />
          </Link>
          <img
            src={auth}
            alt="Authentication illustration"
            className="flex-grow object-contain"
          />
        </div>
        <div className="sm:w-1/2 p-5  flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Reset Password</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <PasswordInput
              label="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
            />
            <PasswordInput
              label="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
      {success && <SuccessModal onClose={closeModal} />}
    </div>
  );
};

export default ResetPassword;
