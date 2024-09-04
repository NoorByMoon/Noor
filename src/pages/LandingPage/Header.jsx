/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo (2).png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="bg-blue-40 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-8" />

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-blue-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#team" className="text-gray-600 hover:text-blue-600">
                Team
              </a>
            </li>
            <li>
              <Link to="/Dashboard" className="text-gray-600 hover:text-blue-600">
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>

        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-full">
          <Link to="/Sign-Up">Sign Up</Link>
        </button>
      </div>

      {/* Dropdown menu card */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-0 mx-4 bg-blue-100 shadow-lg rounded-lg p-4 w-36">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-blue-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-600 hover:text-blue-600">
                  Team
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/Dashboard')}
                  className="text-gray-600 hover:text-blue-600"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/Sign-Up')}
                  className="hidden md:block text-gray-600 hover:text-blue-600"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
