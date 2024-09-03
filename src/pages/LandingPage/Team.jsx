import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from "../../assets/img.png";
import MeetTheTeam from "./MeetTheTeam";

const Team = () => {
  const Teams = [
    {
      image: image,
      name: "Aisha Mudathir",
      role: "Product Manager",
  
    },
    {
      image: image,
      name: "Khadijah Kolapo",
      role: "Product Designer",
    },
    {
      image: image,
      name: "Hind AbdulRasheed",
      role: "Front-End Developer",
    },
    {
      image: image,
      name: "Sekinat Bashir ",
      role: "Front-End Developer",
    },
    {
      image: image,
      name: "Halimah Ajani",
      role: "FullStack Developer ",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

  return (
    <div className="container mx-auto px-4 py-16 " id="team">
      <h1 className="text-center text-[#316097] mb-7 font-bold text-3xl uppercase">
        meet the team
      </h1>
      <Slider {...settings}>
        {Teams.map((team, i) => (
          <div
            key={i}
            className="flex gap-5 justify-center flex-col lg:flex-row"
          >
            <MeetTheTeam {...team} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
