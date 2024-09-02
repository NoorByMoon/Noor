import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";


const MeetTheTeam = ({ image, name, role, description }) => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-4 p-4 max-w-3xl  shadow-lg border border-red-400 ">
        <div>
          <img src={image} alt="" className="h-44 w-44 rounded-full mx-auto " />
        </div>
        <div className="text-center space-y-3    text-[#316097]">
          <h1 className="font-semibold text-lg uppercase">{name}</h1>
          <h6 className="text-base text-red-400">{role}</h6>
          <p>{description}</p>
          <div className="flex items-center justify-center gap-4 text-[#316097] text-2xl  ">
            <RiTwitterXFill />
            <FaInstagram />
            <IoLogoLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam