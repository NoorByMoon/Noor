/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/logo.png"
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";   
import { FaInstagram } from "react-icons/fa"; 
import { FaYoutube } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 ">
      <div className="container mx-auto px-4  ">
        <div className="flex justify-between flex-col  sm:flex-row gap-9 sm:gap-4">
          <div className="sm:w-1/4  ">
            <img src={logo} alt="Noor logo" className="h-12 self-start mb-4" />
            <div className="flex items-center gap-2  text-2xl ">
              <RiTwitterXFill />
              <FaInstagram />
              <FaYoutube />
              <IoLogoLinkedin />
            </div>
          </div>
          <div className="sm:space-y-10 space-y-5   text-lg  sm:w-1/4 ">
            <h1 className="text-3xl sm:text-xl font-bold">About us </h1>
            <ul className="sm:space-y-6  space-y-3 ">
              <li>
                <a href="#">About Noor</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="sm:space-y-10 space-y-5 text-xl sm:text-lg sm:w-1/4">
            <h1 className="text-3xl sm:text-xl font-bold"> Explore</h1>
            <ul className="space-y-3  sm:space-y-6">
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Certification</a>
              </li>
              <li>
                <a href="#">Library</a>
              </li>
            </ul>
          </div>
          <div className="space-y-5 sm:space-y-10 text-lg  sm:w-1/4">
            <h1 className="text-3xl sm:text-xl font-bold">Resources</h1>
            <ul className="space-y-3 sm:space-y-6">
              <li>
                <a href="#">Materials</a>
              </li>
              <li>
                <a href="#">Audio Resources</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Resources Library</a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-left sm:text-center mt-8  ">
          <p className="text-sm">All rights reserved. ©Noor2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
