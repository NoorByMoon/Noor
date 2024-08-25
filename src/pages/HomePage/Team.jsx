import React from 'react'

import image from "../../assets/img.png"
import MeetTheTeam from './MeetTheTeam';

const Team = () => {

  const Teams = [
    {
      image: image,
      name: "Aisha Mudathir",
      role: "Product Manager",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur ",
    },
    {
      image: image,
      name: "Khadijah Kolapo",
      role: "Product Designer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur ",
    },
    {
      image: image,
      name: "Hind AbdulRasheed",
      role: "Front-End Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur ",
    },
    {
      image: image,
      name: "Sekinat Bashir ",
      role: "Front-End Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur",
    },
    {
      image: image,
      name: "Halimah Ajani",
      role: "FullStack Developer ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur",
    },
  ];

  return (
    <div className="bg-[#FFFF] px-10 py-16   flex flex-col items-center justify-center ">
      <h1 className="text-center text-[#316097] mb-7 font-bold text-3xl uppercase">
        meet the team
      </h1>
      <div className=" flex gap-5 justify-center flex-col  lg:flex-row   ">
        {Teams.map((Team, i) => (
          <MeetTheTeam key={i} {...Team} />
        ))}
      </div>
    </div>
  );
}

export default Team