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
      name: "AISHA MUDATHIR",
      role: "Product Manager",
    },
    {
      image: image,
      name: "KHADIJAH KOLAPO ",
      role: "Product Designer",
    },
    {
      image: image,
      name: "HIND ABDULRASHEED",
      role: "Front-End Developer",
    },
    {
      image: image,
      name: "SEKINAT BASHIR ",
      role: "Front-End Developer",
    },
    {
      image: image,
      name: "HALIMAH AJANI",
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div
      data-aos="zoom--in-up"
      data-aos-delay="700"
      className="container mx-auto max-w-screen-lg px-4 py-16 overflow-hidden"
      id="team"
    >
      <h1 className="text-center text-[#316097] mb-7 font-bold text-3xl uppercase">
        meet the team
      </h1>
      <Slider {...settings}>
        {Teams.map((team, i) => (
          <div key={i}>
            <MeetTheTeam {...team} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Team;
