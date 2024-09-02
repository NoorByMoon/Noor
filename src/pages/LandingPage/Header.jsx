/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo (2).png'


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="./about" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a
                href="./features"
                className="text-gray-600 hover:text-blue-600"
              >
                Features
              </a>
            </li>
            <li>
              <a href="team" className="text-gray-600 hover:text-blue-600">
                Team
              </a>
            </li>
            <li>
              <a href="faq" className="text-gray-600 hover:text-blue-600">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-full">
          <Link to='/Sign-Up'>Sign Up</Link>
        </button>
      </div>

      {/* Dropdown menu card */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-auto right-0 mx-4 bg-blue-100 shadow-lg rounded-lg p-4 w-36">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="./about" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a
                  href="./features"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="team" className="text-gray-600 hover:text-blue-600">
                  Team
                </a>
              </li>
              <li>
                <a href="faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
