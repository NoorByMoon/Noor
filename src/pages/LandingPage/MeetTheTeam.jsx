import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";

const MeetTheTeam = ({ image, name, role, link }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4  mx-auto">
      <div>
        <img
          src={image}
          alt={name}
          className="h-36 w-36 rounded-full mx-auto"
        />
      </div>
      <div className="text-center space-y-3 text-[#316097]">
        <h1 className="font-semibold text-lg uppercase">{name}</h1>
        <h6 className="text-base text-red-400">{role}</h6>
        <div className="flex justify-center items-center gap-4">
          <IoLogoLinkedin color="#316097" size={20} />
          <MdOutlineMailOutline color="#316097" size={20} />
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
