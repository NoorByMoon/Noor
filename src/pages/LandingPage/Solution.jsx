import React from "react";
import solution1 from "../../assets/solution1.png";
import solution2 from "../../assets/solution2.png";
import solution3 from "../../assets/solution3.png";
import solution4 from "../../assets/solution4.png";

const Solution = () => {
  const solutions = [
    { Image: solution1, title: "Basic Islamic Etiquettes" },
    { Image: solution2, title: "Basic Islamic Etiquettes" },
    { Image: solution3, title: "Basic Islamic Etiquettes" },
    { Image: solution4, title: "Basic Islamic Etiquettes" },
  ];

  return (
    <section
      className="container max-w-screen-lg mx-auto px-4 py-10 lg:py-16"
      data-aos="zoon-in"
      data-aos-delay="1000"
    >
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-[#316097]">Our Solution</h1>
        <h2 className="text-xl">
          Noor has amazing solutions created for beginners
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-7">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="px-6 py-6 rounded-xl shadow-lg flex flex-col items-center gap-4 max-w-xs w-full"
          >
            <img
              src={solution.Image}
              alt={solution.title}
              className="h-48 w-48 lg:h-64 lg:w-64 object-contain"
            />
            <p className="uppercase text-center">{solution.title}</p>
            <button className="bg-[#316097] rounded-lg text-white py-2 px-4">
              SHOW ME
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solution;
