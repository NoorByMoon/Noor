import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo (2).png";
import auth from "../assets/auth.svg";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email is required");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Simulate API call and validation for the email
    console.log("Forgot password request sent for:", email);
    alert("A password reset link has been sent to your email.");

    // Redirect to the Reset Password page
    navigate("/reset-password", { state: { email } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-300">
      <div className="max-w-4xl w-full flex bg-white  flex-col sm:flex-row">
        <div className="sm:w-1/2 p-5 flex flex-col items-start">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-8 self-start mb-5 max-w-xs sm:max-w-full"
            />
          </Link>
          <img
            src={auth}
            alt="Authentication illustration"
            className="flex-grow object-contain"
          />
        </div>
        <div className="sm:w-1/2 p-5 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`mt-1 block w-full px-3 py-2 text-black bg-white border rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-l-full rounded-r-full hover:bg-blue-600 transition duration-200"
            >
              Reset Password
            </button>
          </form>
          <p className="text-center text-gray-500 mt-4">
            Remember your password?{" "}
            <Link to="/Sign-In" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
