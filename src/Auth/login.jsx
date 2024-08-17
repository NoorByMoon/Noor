/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import auth from "../assets/auth.svg";

function Login() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include letters, numbers, and special characters."
      );
      return;
    }

    setPasswordError("");

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl flex flex-col sm:flex-row">
        <div className="sm:w-1/2 p-8 flex flex-col items-start sm:items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 self-start mb-8 max-w-xs sm:max-w-full"
          />
          <img
            src={auth}
            alt="Authentication illustration"
            className="flex-grow object-contain"
          />
        </div>
        <div className="sm:w-1/2 p-5 sm:p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">MARHABAN (WELCOME)!</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div className="">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </label>
              <div className="relative">
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 text-black relative bg-white border border-gray-300 rounded-md text-sm shadow-sm pr-10 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                <div className="absolute inset-y-0 right-2 flex items-center cursor-pointer">
                  {visible ? (
                    <BsFillEyeSlashFill
                      onClick={() => setVisible(false)}
                      size={20}
                      color="gray"
                    />
                  ) : (
                    <BsFillEyeFill
                      onClick={() => setVisible(true)}
                      size={20}
                      color="gray"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className=" ">
              <input
                type="checkbox"
                id="remember_me"
                className="align-middle"
              />
              <label htmlFor="remember_me" className="  text-gray-600 pl-2 ">
                remember me
              </label>
               
            </div>
            <div className="flex justify-end">
              <a href="" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-r-full rounded-l-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Account
            </button>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-r-full rounded-l-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              Continue with Google
            </button>
            <em className="flex justify-center text-gray-600">
              New Member? <a href="#">signup</a>
            </em>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
